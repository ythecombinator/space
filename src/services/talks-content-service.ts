import { Document as ContentfulDocument } from '@contentful/rich-text-types';
import {
  GetAllTalksDocument,
  GetAllTalksQuery,
  GetTalksStatsQuery,
  GetTalksStatsDocument,
  GetFeaturedTalksQuery,
  GetFeaturedTalksDocument,
  GetActiveTalksQuery,
  GetActiveTalksDocument,
  Session,
  City,
  GetTalkQuery,
  GetTalkDocument,
  GetAllTalkSlugsQuery,
  GetAllTalkSlugsDocument,
  ContentfulTag,
  Talk,
} from 'graphql/schema';
import { DeepNonNullable } from 'utility-types';

import ContentfulService from 'services/contentful-service';

import { formatDate } from 'utils/date';
import { toIndexableCollection } from 'utils/search';

const contentfulServiceInstance = ContentfulService.getInstance();

export default class TalksContentService {
  private static instance: TalksContentService;

  static getInstance() {
    if (!this.instance) {
      this.instance = new TalksContentService();
    }

    return this.instance;
  }

  public async get(id: string) {
    const doc = await contentfulServiceInstance.query<GetTalkQuery>({
      query: GetTalkDocument,
      variables: {
        slug: id,
      },
    });

    return talkDocumentTransformer(doc.data);
  }

  public async getAll() {
    const doc = await contentfulServiceInstance.query<GetAllTalksQuery>({
      query: GetAllTalksDocument,
      variables: {
        limit: 0,
      },
    });
    return transformers.all(doc.data);
  }

  public async getLatest(limit: number = 0) {
    const doc = await contentfulServiceInstance.query<GetAllTalksQuery>({
      query: GetAllTalksDocument,
      variables: {
        limit,
      },
    });
    return transformers.latest(doc.data);
  }

  public async getAllSlugs() {
    const doc = await contentfulServiceInstance.query<GetAllTalkSlugsQuery>({
      query: GetAllTalkSlugsDocument,
    });

    const items = doc.data.talkCollection?.items;

    if (!items) {
      return []
    }

    return items.map((item) => item?.slug!);
  }

  public async getActive() {
    const doc = await contentfulServiceInstance.query<GetActiveTalksQuery>({
      query: GetActiveTalksDocument,
    });

    return transformers.active(doc.data);
  }

  public async getFeatured() {
    const doc = await contentfulServiceInstance.query<GetFeaturedTalksQuery>({
      query: GetFeaturedTalksDocument,
    });

    return transformers.featured(doc.data);
  }

  public async getStats() {
    const doc = await contentfulServiceInstance.query<GetTalksStatsQuery>({
      query: GetTalksStatsDocument,
    });

    return transformers.stats(doc.data);
  }
}

/*~
 * TRANSFORMERS (MAIN)
 */

const allTransformer = (result: GetAllTalksQuery) => {
  const items = (result as DeepNonNullable<GetAllTalksQuery>).talkCollection
    .items;

  return items.map((item) => {
    const {
      title,
      shortDescription,
      slug,
      sessionsCollection,
      contentfulMetadata,
    } = item;

    return {
      talkTitle: title,
      talkSlug: slug,
      // Indexable search metadata
      _description: JSON.stringify(shortDescription.json),
      _events: toIndexableCollection(
        sessionsCollection.items.map((session) => session.event.name)
      ),
      _cities: toIndexableCollection(
        sessionsCollection.items.map((session) => session.event.city.name)
      ),
      _countries: toIndexableCollection(
        sessionsCollection.items.map(
          (session) => session.event.city.country.name
        )
      ),
      _tags: toIndexableCollection(
        contentfulMetadata.tags.map((tag) => tag.name)
      ),
    };
  });
};

const featuredTransformer = (result: GetFeaturedTalksQuery) => {
  const items = (result as DeepNonNullable<GetFeaturedTalksQuery>)
    .sessionCollection?.items;

  return items.map((item) => ({
    eventName: item.event.name,
    photoURL: item.photo.url,
    talkTitle: item.talk.title,
    talkSlug: item.talk.slug,
  }));
};

const activeTransformer = (result: GetActiveTalksQuery) => {
  const items = (result as DeepNonNullable<GetActiveTalksQuery>).talkCollection
    ?.items;

  return items.map((item) => ({
    talkTitle: item.title,
    talkSlug: item.slug,
    sessions: item.sessionsCollection.items.map((session) => ({
      eventName: session.event.name,
      eventPage: session.event.website,
      eventFlag: session.event.city.country.flag,
    })),
  }));
};

const statsTransformer = (result: GetTalksStatsQuery) => {
  const { countryCollection, cityCollection, eventCollection, talkCollection } =
    result as DeepNonNullable<GetTalksStatsQuery>;

  return {
    talksTotal: talkCollection.total,
    eventsTotal: eventCollection.total,
    citiesTotal: cityCollection.total,
    countriesTotal: countryCollection.total,
  };
};

const latestTransformer = (result: GetAllTalksQuery) => {
  const items = (result as DeepNonNullable<GetAllTalksQuery>).talkCollection
    .items;

  return items.map((item) => {
    const { title, slug, shortDescription, contentfulMetadata } = item;
    const headline = shortDescription.json.content[0] as ContentfulDocument;

    return {
      title,
      headline,
      slug,
      tags: contentfulMetadata.tags.map(tagTransformer),
    };
  });
};

const transformers = {
  all: allTransformer,
  active: activeTransformer,
  featured: featuredTransformer,
  stats: statsTransformer,
  latest: latestTransformer,
};

/*~
 * TRANSFORMERS (HELPERS)
 */

const locationTransformer = (city: City) =>
  `${city.name}, ${city.country?.name} ${city.country?.flag} `;

const sessionTransformer = (session: DeepNonNullable<Session>) => ({
  id: session.sys.id,
  eventName: session.event?.name,
  eventLocation: locationTransformer(session.event?.city),
  eventStartingDate: formatters.date(session.event?.startingDate),
  eventEndingDate: formatters.date(session.event?.endingDate),
  sessionAudience: formatters.audience(session.audience),
  sessionLanguage: formatters.language(session.language),
  sessionOnline: session.online,
  sessionSlides: session.slides,
  sessionRecording: session.recording,
});

const talkDocumentTransformer = (result: GetTalkQuery) => {
  const talk = result.talkCollection?.items[0] as DeepNonNullable<Talk>;
  const sessions = talk?.sessionsCollection?.items as Array<
    DeepNonNullable<Session>
  >;

  return {
    title: talk?.title,
    abstract: talk?.abstract?.json as ContentfulDocument,
    sessions: sessions.map(sessionTransformer),
  };
};

const tagTransformer = (tag: DeepNonNullable<ContentfulTag>) => {
  const { id, name } = tag;
  return { id, name };
};

/*~
 * FORMATTERS
 */

const formatAudience = (data: Session['audience']) =>
  data ? `Est. ${data} people audience` : 'No audience data';

const formatLanguage = (data: Session['language']) =>
  `Presented in ${data?.language}`;

const formatters = {
  date: formatDate,
  audience: formatAudience,
  language: formatLanguage,
};
