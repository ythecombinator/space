import { pathOr } from 'ramda';

import NotionService, { NotionResponse } from 'services/providers/notion';

import { formatDate, isSingleDayTimeSpan } from 'utils/date';

const notionServiceInstance = NotionService.getInstance();

export default class TalksRadarContentService {
  private static instance: TalksRadarContentService;
  private seasonMap: Record<ConferenceSeason, string> = {
    '2026': '28968c90fe33815abd62ec8b72b497f0',
    '2025': 'f56a3ba2b74a4339aef9a44d4cdcb2aa',
    '2024': '57cbd3d5d34c4933bc51a7a49737f4f8',
    '2023': '6f8ad796bb5746a1a479446a7153d470',
    '2022': '2dee03c01edf473eb35635ea9f1edcde',
  };

  static getInstance() {
    if (!this.instance) {
      this.instance = new TalksRadarContentService();
    }

    return this.instance;
  }

  public async get(season: ConferenceSeason) {
    const result = await notionServiceInstance.queryDataBase(this.seasonMap[season]);
    return result.map(notionResponseTransformer);
  }

  public async getAll() {
    const results = await Promise.all(
      Object.keys(this.seasonMap).map(async (season) => {
        return { season, data: await this.get(season as ConferenceSeason) };
      })
    );

    return results.reduce((acc, { season, data }) => ({ ...acc, [season]: data }), {}) as Record<
      ConferenceSeason,
      EventEntry[]
    >;
  }
}

//  ---------------------------------------------------------------------------
//  TRANSFORMERS: MAIN
//  ---------------------------------------------------------------------------

const notionResponseTransformer = (response: NotionResponse) => {
  const { event, country, city, dates, deadline, result } = response.properties;

  return {
    event: event.title.map((chunk) => chunk.plain_text).join(' '),
    country: country?.select.name,
    city: city.rich_text.map((chunk) => chunk.plain_text).join(''),
    eventWebsite: pathOr('N/A', ['properties', 'eventWebsite', 'rich_text', 0, 'text', 'content'], result),
    dates: {
      isSingleDayEvent: isSingleDayTimeSpan(dates.date.start, dates.date.end),
      start: {
        raw: dates.date.start,
        formatted: formatDate(dates.date.start),
      },
      end: {
        raw: dates.date.end,
        formatted: formatDate(dates.date.end),
      },
    },
    deadline: deadline?.date?.start
      ? {
          raw: deadline.date.start,
          formatted: formatDate(deadline.date.start),
        }
      : { raw: 'N/A', formatted: 'N/A' },
    cfpWebsite: pathOr('N/A', ['properties', 'cfpWebsite', 'rich_text', 0, 'text', 'content'], result),
    result: result.select.name as EngagementStatusPrimary,
    statusSecondary: response.properties['result-followup']?.select.name as EngagementStatusSecondary,
  };
};

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type ConferenceSeason = '2022' | '2023' | '2024' | '2025' | '2026';

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
