import { Document as ContentfulDocument } from '@contentful/rich-text-types';
import {
  City,
  ContentfulTag,
  GetActiveTalksDocument,
  GetActiveTalksQuery,
  GetAllTalkSlugsDocument,
  GetAllTalkSlugsQuery,
  GetAllTalksDocument,
  GetAllTalksQuery,
  GetFeaturedTalksDocument,
  GetFeaturedTalksQuery,
  GetTalkDocument,
  GetTalkQuery,
  GetTalksForTagDocument,
  GetTalksForTagQuery,
  GetTalksStatsDocument,
  GetTalksStatsQuery,
  Session,
  Talk,
} from 'graphql/schema';
import { DeepNonNullable, ValuesType } from 'utility-types';

import { Routes } from 'config/constants';

import ContentfulService from 'services/providers/contentful';
import YoutubeService, { YoutubeResponse } from 'services/providers/youtube';

import { formatDate, isSingleDayTimeSpan } from 'utils/date';
import { toIndexableCollection } from 'utils/search';

//  ---------------------------------------------------------------------------
//  CONFIG
//  ---------------------------------------------------------------------------

const contentfulServiceInstance = ContentfulService.getInstance();
const youtubeServiceInstance = YoutubeService.getInstance();

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type YoutubeHighlight = ValuesType<Awaited<ReturnType<TalksContentService['getYoutubeHighlights']>>>;

//  ---------------------------------------------------------------------------
//  CORE
//  ---------------------------------------------------------------------------

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
      return [];
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

  public async getTalksForTag(tag: string, limit: number = 0) {
    const doc = await contentfulServiceInstance.query<GetTalksForTagQuery>({
      query: GetTalksForTagDocument,
      variables: {
        tag,
        limit,
      },
    });

    return transformers
      .talksPerTag(doc.data)
      .filter((item) => item.sessionsCount > 2)
      .sort((a, b) => b.sessionsCount - a.sessionsCount);
  }

  public async getStats() {
    const doc = await contentfulServiceInstance.query<GetTalksStatsQuery>({
      query: GetTalksStatsDocument,
    });

    return transformers.stats(doc.data);
  }

  public async getYoutubeHighlights() {
    const playlistID = 'PLu_DF4548Ne1jbT5opOMswazXhMiCLpRP';
    const playlistData = await youtubeServiceInstance.queryPlaylist(playlistID);

    const videoIDs = playlistData.items.map((item) => item.snippet.resourceId.videoId);
    const videoFetchers = videoIDs.map((video) => youtubeServiceInstance.queryVideo(video));
    const videoCollection = await Promise.all(videoFetchers);

    return videoCollection
      .map(transformers.youtubeHighlights)
      .sort((a, b) => parseInt(b.viewCount) - parseInt(a.viewCount));
  }
}

//  ---------------------------------------------------------------------------
//  TRANSFORMERS: MAIN
//  ---------------------------------------------------------------------------

const allTransformer = (result: GetAllTalksQuery) => {
  const items = extractTalkCollectionItems(result);
  const sorted = items.sort(talksSorter);

  return sorted.map((item) => {
    const { title, category, abstract, slug, sessionsCollection, contentfulMetadata } = item;

    return {
      talkTitle: title,
      talkSlug: `/${Routes.talks}/${item.slug}`,
      talkCategory: category,
      // Indexable search metadata
      _description: JSON.stringify(abstract.json),
      _events: toIndexableCollection(sessionsCollection.items.map((session) => session.event.name)),
      _cities: toIndexableCollection(sessionsCollection.items.map((session) => session.event.city.name)),
      _countries: toIndexableCollection(sessionsCollection.items.map((session) => session.event.city.country.name)),
      _tags: toIndexableCollection(contentfulMetadata.tags.map((tag) => tag.name)),
    };
  });
};

const youtubeHighlightsTransformer = (result: YoutubeResponse) => {
  return {
    title: result.items[0].snippet.title,
    thumbnail: result.items[0].snippet.thumbnails.high.url,
    link: `https://www.youtube.com/watch?v=${result.items[0].id}`,
    viewCount: result.items[0].statistics.viewCount,
    likeCount: result.items[0].statistics.likeCount,
  };
};

const featuredTransformer = (result: GetFeaturedTalksQuery) => {
  const items = (result as DeepNonNullable<GetFeaturedTalksQuery>).sessionCollection?.items;

  return items.map((item) => ({
    eventName: item.event.name,
    photoURL: item.photo.url,
    talkTitle: item.talk.title,
    talkSlug: `/${Routes.talks}/${item.talk.slug}`,
  }));
};

const talksPerTagTransformer = (result: GetTalksForTagQuery) => {
  const items = extractTalkCollectionItems(result);
  const sorted = items.sort(talksSorter);

  return sorted.map((item) => ({
    talkTitle: item.title,
    talkSlug: `/${Routes.talks}/${item.slug}`,
    sessionsCount: item.sessionsCollection.total,
  }));
};

const activeTransformer = (result: GetActiveTalksQuery) => {
  const items = (result as DeepNonNullable<GetActiveTalksQuery>).talkCollection?.items;

  return items.map((item) => ({
    talkTitle: item.title,
    talkSlug: `/${Routes.talks}/${item.slug}`,
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
  const items = (result as DeepNonNullable<GetAllTalksQuery>).talkCollection.items;

  return items.map((item) => {
    const { title, slug, contentfulMetadata } = item;

    return {
      title,
      slug,
      tags: contentfulMetadata.tags.map(tagTransformer),
    };
  });
};

const transformers = {
  all: allTransformer,
  active: activeTransformer,
  featured: featuredTransformer,
  youtubeHighlights: youtubeHighlightsTransformer,
  talksPerTag: talksPerTagTransformer,
  stats: statsTransformer,
  latest: latestTransformer,
};

//  ---------------------------------------------------------------------------
//  TRANSFORMERS: UTILS
//  ---------------------------------------------------------------------------

function extractTalkCollectionItems(result: GetAllTalksQuery | GetTalksForTagQuery) {
  return [...(result as DeepNonNullable<GetAllTalksQuery>).talkCollection.items] as DeepNonNullable<Talk>[];
}

function talksSorter(talkA: DeepNonNullable<Talk>, talkB: DeepNonNullable<Talk>) {
  const aSessions = [...talkA.sessionsCollection.items];
  const bSessions = [...talkB.sessionsCollection.items];

  const latestA = aSessions.sort((sessionA, sessionB) => {
    const sub = new Date(sessionB.event.endingDate).getTime() - new Date(sessionA.event.endingDate).getTime();
    return sub;
  })[0];

  const latestB = bSessions.sort((sessionA, sessionB) => {
    const sub = new Date(sessionB.event.endingDate).getTime() - new Date(sessionA.event.endingDate).getTime();
    return sub;
  })[0];

  return new Date(latestB.event.endingDate).getTime() - new Date(latestA.event.endingDate).getTime();
}

const locationTransformer = (city: City) => `${city.name}, ${city.country?.name} ${city.country?.flag} `;

const sessionTransformer = (session: DeepNonNullable<Session>) => ({
  id: session.sys.id,
  eventName: session.event?.name,
  eventLocation: locationTransformer(session.event?.city),
  eventWebsite: session.event?.website,
  eventStartingDate: {
    raw: session.event?.startingDate,
    formatted: formatters.date(session.event?.startingDate),
  },
  eventEndingDate: {
    raw: session.event?.endingDate,
    formatted: formatters.date(session.event?.endingDate),
  },
  isSingleDayEvent: isSingleDayTimeSpan(session.event?.startingDate, session.event?.endingDate),
  sessionAudience: formatters.audience(session.audience),
  sessionLanguage: formatters.language(session.language),
  sessionOnline: session.online,
  sessionSlides: session.slides,
  sessionRecording: session.recording,
});

const talkDocumentTransformer = (result: GetTalkQuery) => {
  const talk = result.talkCollection?.items[0] as DeepNonNullable<Talk>;
  const sessions = talk?.sessionsCollection?.items as Array<DeepNonNullable<Session>>;

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

//  ---------------------------------------------------------------------------
//  FORMATTERS
//  ---------------------------------------------------------------------------

const formatAudience = (data: Session['audience']) => (data ? `Est. ${data} people audience` : 'No audience data');

const formatLanguage = (data: Session['language']) => `Presented in ${data?.language}`;

const formatters = {
  date: formatDate,
  audience: formatAudience,
  language: formatLanguage,
};
