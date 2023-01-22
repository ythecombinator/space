import { ExternalLink } from 'types/link';

export const siteMetadata = {
  title: 'Matheus Albuquerque',
  author: 'Matheus Albuquerque',
  headerTitle: 'Astrosaurus',
  description: 'Matheus Albuquerque — Developer, speaker, creator.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://www.ythecombinator.space',
  siteRepo: 'https://github.com/dephraiim/astrosaurus.me',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpeg',
  socialBanner: '/static/images/card.png',
  email: 'ephraimduncan68@gmail.com',
  github: 'https://github.com/dephraiim',
  twitter: '@ythecombinator',
  locale: 'en-US',
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
