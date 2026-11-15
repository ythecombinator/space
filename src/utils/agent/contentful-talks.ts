import { documentToString } from 'utils/contentful';

import type { AgentTalk, AgentTalkStats } from 'utils/agent/types';

type TalkItem = {
  title?: string | null;
  category?: string | null;
  slug?: string | null;
  abstract?: { json?: unknown } | null;
  sessionsCollection?: {
    items?: Array<{ event?: { name?: string | null; endingDate?: string | null } | null } | null> | null;
  } | null;
  contentfulMetadata?: { tags?: Array<{ name?: string | null } | null> | null } | null;
};

type TalksResponse = {
  data?: {
    talkCollection?: { total?: number; items?: Array<TalkItem | null> | null } | null;
    eventCollection?: { total?: number } | null;
    cityCollection?: { total?: number } | null;
    countryCollection?: { total?: number } | null;
  };
  errors?: Array<{ message?: string }>;
};

const QUERY = `
  query AgentTalks($limit: Int, $skip: Int) {
    talkCollection(limit: $limit, skip: $skip) {
      total
      items {
        title
        category
        abstract { json }
        slug
        sessionsCollection(limit: 8) {
          items {
            event { name endingDate }
          }
        }
        contentfulMetadata { tags { name } }
      }
    }
  }
`;

const STATS_QUERY = `
  query AgentTalkStats {
    talkCollection { total }
    eventCollection { total }
    cityCollection { total }
    countryCollection { total }
  }
`;

function latestEnding(item: TalkItem) {
  const dates = (item.sessionsCollection?.items ?? [])
    .map((session) => new Date(session?.event?.endingDate ?? 0).getTime())
    .filter((value) => Number.isFinite(value));
  return dates.length ? Math.max(...dates) : 0;
}

function plainAbstract(json: unknown) {
  if (!json || typeof json !== 'object') return '';
  try {
    return documentToString(json as Parameters<typeof documentToString>[0]).replace(/\s+/g, ' ').trim();
  } catch {
    return '';
  }
}

async function contentfulQuery<T>(query: string, variables?: Record<string, number>) {
  const endpoint = process.env.CONTENTFUL_ENDPOINT;
  const token = process.env.CONTENTFUL_TOKEN;
  if (!endpoint || !token) throw new Error('Contentful credentials are missing.');

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
  });

  const payload = await response.text();
  if (!response.ok) throw new Error(`Contentful responded with ${response.status}. ${payload.slice(0, 500)}`);

  const body = JSON.parse(payload) as T & { errors?: Array<{ message?: string }> };
  if (body.errors?.length) {
    throw new Error(body.errors.map((error) => error.message).filter(Boolean).join(' '));
  }
  return body;
}

export async function fetchAgentTalks(): Promise<{ talks: AgentTalk[]; talkStats: AgentTalkStats }> {
  const statsBody = await contentfulQuery<TalksResponse>(STATS_QUERY);
  const items: TalkItem[] = [];
  const pageSize = 20;
  let skip = 0;
  let total = statsBody.data?.talkCollection?.total ?? 0;

  while (skip < total || skip === 0) {
    const page = await contentfulQuery<TalksResponse>(QUERY, { limit: pageSize, skip });
    const collection = page.data?.talkCollection;
    total = collection?.total ?? total;
    const pageItems = (collection?.items ?? []).filter((item): item is TalkItem => Boolean(item?.slug && item.title));
    items.push(...pageItems);
    if (!pageItems.length || items.length >= total) break;
    skip += pageSize;
  }
  items.sort((a, b) => latestEnding(b) - latestEnding(a));

  const talks = items.map((item) => {
    const events = Array.from(
      new Set(
        (item.sessionsCollection?.items ?? []).map((session) => session?.event?.name).filter((name): name is string => Boolean(name)),
      ),
    );
    const tags = (item.contentfulMetadata?.tags ?? [])
      .map((tag) => tag?.name)
      .filter((name): name is string => Boolean(name));

    return {
      title: item.title as string,
      path: `/talks/${item.slug}`,
      markdownPath: `/talks/${item.slug}.md`,
      summary: plainAbstract(item.abstract?.json),
      tags,
      category: typeof item.category === 'string' ? item.category : '',
      events,
    };
  });

  return {
    talks,
    talkStats: {
      talksTotal: statsBody.data?.talkCollection?.total ?? talks.length,
      eventsTotal: statsBody.data?.eventCollection?.total ?? 0,
      citiesTotal: statsBody.data?.cityCollection?.total ?? 0,
      countriesTotal: statsBody.data?.countryCollection?.total ?? 0,
    },
  };
}
