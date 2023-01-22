import { ExternalLink } from 'types/link';

export const siteTitle = 'ythecombinator';

export const siteConfig = {
  baseTitle: 'Matheus Albuquerque',
  title: 'Matheus Albuquerque — Developer, speaker, creator.',
  description:
    'Sr. Software Engineer, Front-End • Consultant • Speaker • Traveler',
  url: 'https://www.ythecombinator.space',
  twitterHandle: '@ythecombinator',
};

export const socialNetworks: Array<ExternalLink> = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/ythecombinator',
  },
  {
    label: 'Github',
    href: 'https://github.com/ythecombinator',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ythecombinator',
  },
  {
    label: 'SpeakerDeck',
    href: 'https://speakerdeck.com/ythecombinator',
  },
  {
    label: 'devto',
    href: 'https://dev.to/ythecombinator',
  },
];

export enum Routes {
  base = '/',
  about = 'about',
  work = 'about/work',
  life = 'about/life',
  setup = 'about/setup',
  posts = 'posts',
  talks = 'talks',
  projects = 'projects',
  tags = 'tags',
}

export const headerNavigationLinks = [
  { href: Routes.base, title: 'Home' },
  { href: `/${Routes.posts}`, title: 'Posts' },
  { href: `/${Routes.talks}`, title: 'Talks' },
  { href: `/${Routes.about}`, title: 'About' },
];

export enum Layouts {
  post = 'layout-post',
  page = 'layout-page',
  about = 'layout-about',
}

export enum SourcePath {
  content = 'src/content',
}
