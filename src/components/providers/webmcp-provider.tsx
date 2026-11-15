import { useWebMCP } from 'use-webmcp-tool';

import { getCurrentPage, listPosts, listTalks, searchContent, topicBrief } from 'utils/webmcp/tools';

const readOnly = { readOnlyHint: true } as const;

const paging = {
  offset: {
    type: 'integer',
    minimum: 0,
    description: 'How many matches to skip. Use nextOffset from the previous result.',
  },
  limit: { type: 'integer', minimum: 1, maximum: 8, description: 'How many matches to return. Defaults to 5.' },
} as const;

const searchSchema = {
  type: 'object',
  properties: {
    query: { type: 'string', maxLength: 120, description: 'Words to match, such as a topic or a talk title.' },
    ...paging,
  },
  required: ['query'],
  additionalProperties: false,
} as const;

const listSchema = {
  type: 'object',
  properties: {
    tag: { type: 'string', maxLength: 40, description: 'Exact tag. Omit to list everything.' },
    ...paging,
  },
  additionalProperties: false,
} as const;

const topicSchema = {
  type: 'object',
  properties: {
    topic: { type: 'string', maxLength: 80, description: 'Topic, tag, or phrase, such as react or performance.' },
    offset: paging.offset,
  },
  required: ['topic'],
  additionalProperties: false,
} as const;

const emptySchema = {
  type: 'object',
  properties: {},
  additionalProperties: false,
} as const;

export default function WebMCPProvider() {
  useWebMCP({
    name: 'search-content',
    description:
      'Searches Matheus Albuquerque’s posts, talks, and site pages by title, summary, and tags. Use when the task needs a few matching links, not the whole catalog. Read only. Answers stay under 2000 characters and include hasMore plus nextOffset when more matches exist. Errors are a sentence.',
    inputSchema: searchSchema,
    annotations: readOnly,
    execute: (args) => searchContent(args),
  });

  useWebMCP({
    name: 'list-posts',
    description:
      'Lists published posts, newest first. Use when the task needs the writing catalog, optionally filtered to one exact tag. Read only. Page with offset and nextOffset.',
    inputSchema: listSchema,
    annotations: readOnly,
    execute: (args) => listPosts(args),
  });

  useWebMCP({
    name: 'list-talks',
    description:
      'Lists conference talks with tags, category, and event names. Use when the task needs the talk catalog. Read only. Page with offset and nextOffset. Abstracts are shortened; the url points at the full markdown copy.',
    inputSchema: listSchema,
    annotations: readOnly,
    execute: (args) => listTalks(args),
  });

  useWebMCP({
    name: 'topic-brief',
    description:
      'Summarizes how much Matheus has published on one topic across posts and talks. Use when the task needs counts, a date range for posts, and a few highlights. Read only.',
    inputSchema: topicSchema,
    annotations: readOnly,
    execute: (args) => topicBrief(args),
  });

  useWebMCP({
    name: 'get-current-page',
    description:
      'Describes the page currently open: title, summary, and related links that share a tag. Use when the task is about the page the person is already on. Read only. Takes no arguments.',
    inputSchema: emptySchema,
    annotations: readOnly,
    execute: () => getCurrentPage(),
  });

  return null;
}
