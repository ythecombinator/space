import type { AgentIndex, AgentPost, AgentTalk } from 'utils/agent/types';

const MAX_CHARS = 2000;
const INDEX_URL = '/agent/content-index.json';

type ContentHit = {
  kind: 'post' | 'talk' | 'page';
  title: string;
  url: string;
  summary: string;
  tags: string[];
  date?: string;
};

let indexRequest: Promise<AgentIndex> | null = null;

export function loadIndex() {
  if (!indexRequest) {
    indexRequest = fetch(INDEX_URL)
      .then((response) => {
        if (!response.ok) throw new Error(`Content index responded with ${response.status}.`);
        return response.json() as Promise<AgentIndex>;
      })
      .catch((error) => {
        indexRequest = null;
        throw error;
      });
  }
  return indexRequest;
}

function siteUrl(index: AgentIndex, urlPath: string) {
  return `${index.site.url}${urlPath}`;
}

function haystack(parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(' ').toLowerCase();
}

function words(value: string) {
  return value
    .toLowerCase()
    .split(/[^a-z0-9+#.]+/)
    .filter((word) => word.length > 1);
}

function matchesQuery(query: string, text: string) {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return false;
  if (text.includes(normalized)) return true;
  const tokens = words(normalized);
  return tokens.length > 0 && tokens.every((token) => text.includes(token));
}

function hitsFromIndex(index: AgentIndex): ContentHit[] {
  return [
    ...index.pages.map((page) => ({
      kind: 'page' as const,
      title: page.title,
      url: siteUrl(index, page.markdownPath),
      summary: page.summary,
      tags: [],
    })),
    ...index.posts.map((post) => ({
      kind: 'post' as const,
      title: post.title,
      url: siteUrl(index, post.markdownPath),
      summary: post.summary,
      tags: post.tags,
      date: post.date,
    })),
    ...index.talks.map((talk) => ({
      kind: 'talk' as const,
      title: talk.title,
      url: siteUrl(index, talk.markdownPath),
      summary: talk.summary,
      tags: [...talk.tags, talk.category].filter(Boolean),
    })),
  ];
}

function allTags(index: AgentIndex) {
  return [...index.posts.flatMap((post) => post.tags), ...index.talks.flatMap((talk) => talk.tags)];
}

function levenshtein(a: string, b: string) {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    let previous = i - 1;
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const current = row[j];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + cost);
      previous = current;
    }
  }
  return row[b.length];
}

function closestTags(query: string, tags: string[]) {
  const normalized = query.toLowerCase().trim();
  return Array.from(new Set(tags))
    .map((tag) => {
      const candidate = tag.toLowerCase();
      const distance = levenshtein(normalized, candidate);
      const score = 1 - distance / Math.max(normalized.length, candidate.length);
      return { tag, score };
    })
    .filter((item) => item.score >= 0.45)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((item) => item.tag);
}

function noMatch(kind: string, query: string, tags: string[]) {
  const closest = closestTags(query, tags);
  const suggestion = closest.length ? ` Closest tags: ${closest.join(', ')}.` : '';
  return `No ${kind} matched '${query}'.${suggestion}`;
}

function asQuery(value: unknown, name: string, max: number) {
  if (typeof value !== 'string' || !value.trim()) return `Provide ${name} as text.`;
  const query = value.trim();
  if (query.length > max) return `${name} must be ${max} characters or fewer.`;
  return query;
}

function asOffset(value: unknown) {
  if (value == null) return 0;
  if (typeof value !== 'number' || !Number.isInteger(value) || value < 0) {
    return 'offset must be a whole number starting at 0.';
  }
  return value;
}

function asLimit(value: unknown, fallback: number) {
  if (value == null) return fallback;
  if (typeof value !== 'number' || !Number.isInteger(value) || value < 1 || value > 8) {
    return 'limit must be a whole number from 1 to 8.';
  }
  return value;
}

function shorten(text: string, max: number) {
  const flat = text.replace(/\s+/g, ' ').trim();
  if (flat.length <= max) return flat;
  return `${flat.slice(0, max - 1).trimEnd()}…`;
}

function fit(payload: Record<string, unknown>, items: unknown[], shrink: (next: unknown[]) => Record<string, unknown>) {
  let next = items;
  let body = shrink(next);
  while (JSON.stringify(body).length > MAX_CHARS && next.length > 1) {
    next = next.slice(0, -1);
    body = { ...shrink(next), trimmed: true };
  }

  if (JSON.stringify(body).length > MAX_CHARS) {
    body = {
      ...body,
      trimmed: true,
      note: 'Shortened to stay under 2000 characters.',
    };
  }

  return body;
}

function pagePayload(total: number, offset: number, items: Array<Record<string, unknown>>) {
  const hasMore = offset + items.length < total;
  return {
    total,
    offset,
    count: items.length,
    hasMore,
    ...(hasMore ? { nextOffset: offset + items.length } : {}),
    items,
  };
}

function postHit(index: AgentIndex, post: AgentPost) {
  return {
    kind: 'post',
    title: post.title,
    url: siteUrl(index, post.markdownPath),
    date: post.date,
    tags: post.tags,
    summary: shorten(post.summary, 180),
  };
}

function talkHit(index: AgentIndex, talk: AgentTalk) {
  return {
    kind: 'talk',
    title: talk.title,
    url: siteUrl(index, talk.markdownPath),
    tags: talk.tags,
    category: talk.category,
    events: talk.events.slice(0, 4),
    summary: shorten(talk.summary, 180),
  };
}

export async function searchContent(input: Record<string, unknown>) {
  const query = asQuery(input.query, 'query', 120);
  if (typeof query !== 'string') return query;
  const offset = asOffset(input.offset);
  if (typeof offset !== 'number') return offset;
  const limit = asLimit(input.limit, 5);
  if (typeof limit !== 'number') return limit;

  const index = await loadIndex();
  const matched = hitsFromIndex(index).filter((hit) =>
    matchesQuery(query, haystack([hit.title, hit.summary, hit.tags.join(' ')]))
  );

  if (!matched.length) return noMatch('content', query, allTags(index));

  const slice = matched.slice(offset, offset + limit).map((hit) => ({
    kind: hit.kind,
    title: hit.title,
    url: hit.url,
    date: hit.date,
    tags: hit.tags,
    summary: shorten(hit.summary, 180),
  }));

  return fit(pagePayload(matched.length, offset, slice), slice, (items) =>
    pagePayload(matched.length, offset, items as typeof slice)
  );
}

export async function listPosts(input: Record<string, unknown>) {
  const offset = asOffset(input.offset);
  if (typeof offset !== 'number') return offset;
  const limit = asLimit(input.limit, 5);
  if (typeof limit !== 'number') return limit;

  const index = await loadIndex();
  let posts = index.posts;
  if (input.tag != null) {
    const tag = asQuery(input.tag, 'tag', 40);
    if (typeof tag !== 'string') return tag;
    posts = posts.filter((post) => post.tags.some((item) => item.toLowerCase() === tag.toLowerCase()));
    if (!posts.length) return noMatch('posts', tag, allTags(index));
  }

  const slice = posts.slice(offset, offset + limit).map((post) => postHit(index, post));
  return fit(pagePayload(posts.length, offset, slice), slice, (items) =>
    pagePayload(posts.length, offset, items as typeof slice)
  );
}

export async function listTalks(input: Record<string, unknown>) {
  const offset = asOffset(input.offset);
  if (typeof offset !== 'number') return offset;
  const limit = asLimit(input.limit, 5);
  if (typeof limit !== 'number') return limit;

  const index = await loadIndex();
  if (!index.talks.length) {
    return 'Talk titles are published on the talks page. This index has no talk records yet.';
  }

  let talks = index.talks;
  if (input.tag != null) {
    const tag = asQuery(input.tag, 'tag', 40);
    if (typeof tag !== 'string') return tag;
    talks = talks.filter((talk) =>
      [...talk.tags, talk.category].some((item) => item.toLowerCase() === tag.toLowerCase())
    );
    if (!talks.length) return noMatch('talks', tag, allTags(index));
  }

  const slice = talks.slice(offset, offset + limit).map((talk) => talkHit(index, talk));
  return fit(pagePayload(talks.length, offset, slice), slice, (items) =>
    pagePayload(talks.length, offset, items as typeof slice)
  );
}

export async function topicBrief(input: Record<string, unknown>) {
  const topic = asQuery(input.topic, 'topic', 80);
  if (typeof topic !== 'string') return topic;
  const offset = asOffset(input.offset);
  if (typeof offset !== 'number') return offset;

  const index = await loadIndex();
  const posts = index.posts.filter((post) =>
    matchesQuery(topic, haystack([post.title, post.summary, post.tags.join(' ')]))
  );
  const talks = index.talks.filter((talk) =>
    matchesQuery(topic, haystack([talk.title, talk.summary, talk.tags.join(' '), talk.category, talk.events.join(' ')]))
  );

  if (!posts.length && !talks.length) return noMatch('content', topic, allTags(index));

  const dates = posts
    .map((post) => post.date)
    .filter(Boolean)
    .sort();
  const highlights = [...posts.map((post) => postHit(index, post)), ...talks.map((talk) => talkHit(index, talk))];
  const slice = highlights.slice(offset, offset + 5);

  const payload = {
    topic,
    posts: {
      total: posts.length,
      ...(dates.length ? { earliest: dates[0], latest: dates[dates.length - 1] } : {}),
    },
    talks: { total: talks.length },
    ...pagePayload(highlights.length, offset, slice),
  };

  return fit(payload, slice, (items) => ({
    ...payload,
    ...pagePayload(highlights.length, offset, items as typeof slice),
  }));
}

export async function getCurrentPage() {
  const index = await loadIndex();
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const page = index.pages.find((item) => item.path === pathname);
  const post = index.posts.find((item) => item.path === pathname);
  const talk = index.talks.find((item) => item.path === pathname);

  if (!page && !post && !talk) {
    return `This page (${pathname}) is not in the content index. Start from ${index.site.url}/llms.txt.`;
  }

  const tags = post?.tags ?? talk?.tags ?? [];
  const related = hitsFromIndex(index)
    .filter((hit) => hit.url !== siteUrl(index, (post ?? talk)?.markdownPath ?? page?.markdownPath ?? ''))
    .filter((hit) => tags.some((tag) => hit.tags.some((item) => item.toLowerCase() === tag.toLowerCase())))
    .slice(0, 4)
    .map((hit) => ({ kind: hit.kind, title: hit.title, url: hit.url }));

  return {
    path: pathname,
    title: post?.title ?? talk?.title ?? page?.title,
    summary: shorten(post?.summary ?? talk?.summary ?? page?.summary ?? '', 400),
    url: siteUrl(index, post?.markdownPath ?? talk?.markdownPath ?? page?.markdownPath ?? pathname),
    ...(post ? { date: post.date, tags: post.tags, language: post.language } : {}),
    ...(talk ? { tags: talk.tags, category: talk.category, events: talk.events.slice(0, 6) } : {}),
    ...(index.talkStats && pathname === '/talks' ? { talkStats: index.talkStats } : {}),
    related,
  };
}
