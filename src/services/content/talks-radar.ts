import NotionService, { NotionPageResponse } from 'services/providers/notion';

import { formatDate, isSingleDayTimeSpan } from 'utils/date';

const DATABASE_ID = '28968c90fe33815abd62ec8b72b497f0';

export default class TalksRadarContentService {
  private static instance: TalksRadarContentService;

  static getInstance() {
    if (!this.instance) {
      this.instance = new TalksRadarContentService();
    }

    return this.instance;
  }

  public async getAll() {
    const notionService = NotionService.getInstance();
    const result = await notionService.queryDataBase(DATABASE_ID);
    return result.map(notionResponseTransformer);
  }
}

//  ---------------------------------------------------------------------------
//  TRANSFORMERS: MAIN
//  ---------------------------------------------------------------------------

const notionResponseTransformer = (response: NotionPageResponse) => {
  const properties = response.properties;

  // Helper to get title property
  const getTitle = (key: string) => {
    const prop = properties[key];
    if (prop?.type === 'title') {
      return prop.title.map((chunk) => chunk.plain_text).join(' ');
    }
    return '';
  };

  // Helper to get rich text property
  const getRichText = (key: string) => {
    const prop = properties[key];
    if (prop?.type === 'rich_text') {
      if (prop.rich_text.length > 0 && prop.rich_text[0].type === 'text') {
        return prop.rich_text[0].text.content;
      }
    }
    return 'N/A';
  };

  // Helper to get select property
  const getSelect = (key: string) => {
    const prop = properties[key];
    if (prop?.type === 'select' && prop.select) {
      return prop.select.name;
    }
    return 'N/A';
  };

  // Helper to get date property
  const getDate = (key: string) => {
    const prop = properties[key];
    if (prop?.type === 'date' && prop.date) {
      return prop.date;
    }
    return null;
  };

  // Helper to get relation property (for sessions-submitted and sessions-approved)
  const getRelation = (key: string) => {
    const prop = properties[key];
    if (prop?.type === 'relation') {
      return prop.relation.map((rel) => rel.id);
    }
    return [];
  };

  const dates = getDate('dates');
  const deadline = getDate('deadline');

  return {
    event: getTitle('event'),
    country: getSelect('country'),
    city: getRichText('city'),
    eventWebsite: getRichText('website'),
    dates: dates
      ? {
          isSingleDayEvent: isSingleDayTimeSpan(dates.start, dates.end || dates.start),
          start: {
            raw: dates.start,
            formatted: formatDate(dates.start),
          },
          end: {
            raw: dates.end || dates.start,
            formatted: formatDate(dates.end || dates.start),
          },
        }
      : {
          isSingleDayEvent: true,
          start: { raw: 'N/A', formatted: 'N/A' },
          end: { raw: 'N/A', formatted: 'N/A' },
        },
    deadline: deadline?.start
      ? {
          raw: deadline.start,
          formatted: formatDate(deadline.start),
        }
      : { raw: 'N/A', formatted: 'N/A' },
    cfpWebsite: getRichText('cfp'),
    result: getSelect('result') as EngagementStatusPrimary,
    statusSecondary: getSelect('result-followup') as EngagementStatusSecondary,
    sessionsSubmitted: getRelation('sessions-submitted'),
    sessionsApproved: getRelation('sessions-approved'),
  };
};

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type EngagementStatusPrimary =
  | 'CANCELED'
  | 'NO FEEDBACK'
  | 'WAITING'
  | 'REJECTED'
  | 'TO SUBMIT'
  | 'NOT SUBMITTED'
  | 'SELECTED'
  | 'INVITED';

export type EngagementStatusSecondary = 'N/A' | 'PRESENTED' | 'TO BE PRESENTED' | 'TO BE CONFIRMED' | 'REJECTED';

export type EventEntry = ReturnType<typeof notionResponseTransformer>;
