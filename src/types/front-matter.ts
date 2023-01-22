import { ReadTimeResults } from 'reading-time';

export type PostFrontMatter = {
  title: string;
  date: string;
  tags: string[];
  lastmod?: string;
  draft?: boolean;
  summary?: string;
  images?: string[];
  authors?: string[];
  layout?: string;
  canonicalUrl?: string;
  slug: string;
  fileName: string;
  readingTime: ReadTimeResults;
};

export type AboutFrontMatter = {
  layout?: string;
  name: string;
  avatar: string;
  occupation: string;
  company: string;
  email: string;
  twitter: string;
  linkedin: string;
  github: string;
};

export type ContentFrontMatter = PostFrontMatter | AboutFrontMatter;
