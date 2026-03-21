import NotionService, { NotionPageResponse } from 'services/providers/notion';

import { formatDate, isSingleDayTimeSpan } from 'utils/date';

const DATABASE_ID = process.env.NOTION_DATABASE_ID_EVENTS!;

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
    const result = await notionService.queryDatabase(DATABASE_ID);
    return result.map(notionResponseTransformer);
  }
}

//  ---------------------------------------------------------------------------
//  TRANSFORMERS: MAIN
//  ---------------------------------------------------------------------------

const NOT_AVAILABLE = 'N/A' as const;

const PROPERTY_KEYS = {
  event: 'event',
  country: 'country',
  city: 'city',
  website: 'website',
  dates: 'dates',
  deadline: 'deadline',
  cfp: 'cfp',
  result: 'result',
  resultFollowUp: 'result-followup',
  sessionsSubmitted: 'sessions-submitted',
  sessionsApproved: 'sessions-approved',
} as const;

const primaryStatuses: readonly EngagementStatusPrimary[] = [
  'CANCELED',
  'NO FEEDBACK',
  'WAITING',
  'REJECTED',
  'TO SUBMIT',
  'NOT SUBMITTED',
  'SELECTED',
  'INVITED',
];

const secondaryStatuses: readonly EngagementStatusSecondary[] = [
  'N/A',
  'PRESENTED',
  'TO BE PRESENTED',
  'TO BE CONFIRMED',
  'REJECTED',
];

type NotionProperty = NotionPageResponse['properties'][string];
type PropertyKey = (typeof PROPERTY_KEYS)[keyof typeof PROPERTY_KEYS];

function isPrimaryStatus(value: string): value is EngagementStatusPrimary {
  return primaryStatuses.includes(value as EngagementStatusPrimary);
}

function isSecondaryStatus(value: string): value is EngagementStatusSecondary {
  return secondaryStatuses.includes(value as EngagementStatusSecondary);
}

function getProperty(properties: NotionPageResponse['properties'], key: PropertyKey) {
  return properties[key];
}

function getTitle(properties: NotionPageResponse['properties'], key: PropertyKey) {
  const property = getProperty(properties, key);

  if (property?.type !== 'title') {
    return '';
  }

  return property.title.map((chunk) => chunk.plain_text).join(' ');
}

function getRichText(properties: NotionPageResponse['properties'], key: PropertyKey) {
  const property = getProperty(properties, key);

  if (property?.type !== 'rich_text') {
    return NOT_AVAILABLE;
  }

  const [firstChunk] = property.rich_text;

  if (!firstChunk || firstChunk.type !== 'text') {
    return NOT_AVAILABLE;
  }

  return firstChunk.text.content;
}

function getSelect(properties: NotionPageResponse['properties'], key: PropertyKey) {
  const property = getProperty(properties, key);

  if (property?.type !== 'select' || !property.select) {
    return NOT_AVAILABLE;
  }

  return property.select.name;
}

function getDate(properties: NotionPageResponse['properties'], key: PropertyKey) {
  const property = getProperty(properties, key);

  if (property?.type !== 'date' || !property.date) {
    return null;
  }

  return property.date;
}

function getRelation(properties: NotionPageResponse['properties'], key: PropertyKey) {
  const property = getProperty(properties, key);

  if (property?.type !== 'relation') {
    return [];
  }

  return property.relation.map((relation) => relation.id);
}

function buildDates(date: ReturnType<typeof getDate>) {
  if (!date) {
    return {
      isSingleDayEvent: true,
      start: { raw: NOT_AVAILABLE, formatted: NOT_AVAILABLE },
      end: { raw: NOT_AVAILABLE, formatted: NOT_AVAILABLE },
    };
  }

  const start = date.start;
  const end = date.end || start;

  return {
    isSingleDayEvent: isSingleDayTimeSpan(start, end),
    start: {
      raw: start,
      formatted: formatDate(start),
    },
    end: {
      raw: end,
      formatted: formatDate(end),
    },
  };
}

function buildDeadline(date: ReturnType<typeof getDate>) {
  if (!date?.start) {
    return { raw: NOT_AVAILABLE, formatted: NOT_AVAILABLE };
  }

  return {
    raw: date.start,
    formatted: formatDate(date.start),
  };
}

function notionResponseTransformer(response: NotionPageResponse) {
  const properties = response.properties;
  const statusPrimary = getSelect(properties, PROPERTY_KEYS.result);
  const statusSecondary = getSelect(properties, PROPERTY_KEYS.resultFollowUp);

  return {
    event: getTitle(properties, PROPERTY_KEYS.event),
    country: getSelect(properties, PROPERTY_KEYS.country),
    city: getRichText(properties, PROPERTY_KEYS.city),
    eventWebsite: getRichText(properties, PROPERTY_KEYS.website),
    dates: buildDates(getDate(properties, PROPERTY_KEYS.dates)),
    deadline: buildDeadline(getDate(properties, PROPERTY_KEYS.deadline)),
    cfpWebsite: getRichText(properties, PROPERTY_KEYS.cfp),
    result: isPrimaryStatus(statusPrimary) ? statusPrimary : 'NO FEEDBACK',
    statusSecondary: isSecondaryStatus(statusSecondary) ? statusSecondary : 'N/A',
    sessionsSubmitted: getRelation(properties, PROPERTY_KEYS.sessionsSubmitted),
    sessionsApproved: getRelation(properties, PROPERTY_KEYS.sessionsApproved),
  };
}

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
