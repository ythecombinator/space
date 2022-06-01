import { HeaderExternalLinkIconIdentifier } from 'components/shared/HeaderExternalLinkIcon';

export const siteTitle = 'ythecombinator';

export const siteOwner = 'Matheus Albuquerque';

export const externalLinks: Array<{
  name: HeaderExternalLinkIconIdentifier;
  url: string;
}> = [
  {
    name: `twitter`,
    url: `https://twitter.com/ythecombinator`,
  },
  {
    name: `github`,
    url: `https://github.com/ythecombinator`,
  },
  {
    name: `devto`,
    url: `https://dev.to/ythecombinator`,
  },
  {
    name: `speakerdeck`,
    url: `https://speakerdeck.com/ythecombinator`,
  },
  {
    name: `linkedin`,
    url: `https://www.linkedin.com/in/ythecombinator/`,
  },
  {
    name: `angel.co`,
    url: `https://angel.co/u/ythecombinator`,
  },
  {
    name: `instagram`,
    url: `https://www.instagram.com/ythecombinator`,
  },
  {
    name: `unsplash`,
    url: `https://unsplash.com/@ythecombinator`,
  },
  {
    name: `deviantart`,
    url: `https://www.deviantart.com/ythecombinator`,
  },
];

export enum NavigationPath {
  base = '/',
  about = '/about',
  posts = '/posts',
  talks = '/talks',
  projects = '/projects',
  tags = '/tags',
}

export const navigationItems = [
  {
    title: `About`,
    slug: NavigationPath.about,
  },
  {
    title: `Posts`,
    slug: NavigationPath.posts,
  },
  {
    title: `Talks`,
    slug: NavigationPath.talks,
  },
  {
    title: `Projects`,
    slug: NavigationPath.projects,
  },
];

export enum SourcePath {
  content = 'src/content',
}
