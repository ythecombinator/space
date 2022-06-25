import { HeaderExternalLinkIconIdentifier } from 'components/shared/HeaderExternalLinkIcon';

export const siteTitle = 'ythecombinator';

export const siteConfig = {
  baseTitle: 'Matheus Albuquerque',
  title: 'Matheus Albuquerque — Developer, speaker, creator.',
  description:
    'Sr. Software Engineer, Front-End • Consultant • Speaker • Traveler',
  url: 'https://www.ythecombinator.space',
  twitterHandle: '@ythecombinator',
};

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
  writing = '/writing',
  speaking = '/speaking',
  projects = '/projects',
  tags = '/tags',
}

export const navigationItems = [
  {
    title: `About`,
    slug: NavigationPath.about,
  },
  {
    title: `Writing`,
    slug: NavigationPath.writing,
  },
  {
    title: `Speaking`,
    slug: NavigationPath.speaking,
  },
  {
    title: `Projects`,
    slug: NavigationPath.projects,
  },
];

export enum SourcePath {
  content = 'src/content',
}
