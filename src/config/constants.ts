import { ComponentType } from 'react';
import { FaDev, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import LayoutBiographyEntry from 'components/layouts/layout-biography-entry';
import LayoutBlogEntry from 'components/layouts/layout-blog-entry';
import LayoutPage from 'components/layouts/layout-page';

export const siteMetadata = {
  title: 'Matheus Albuquerque',
  author: 'Matheus Albuquerque',
  authorFirstName: 'Matheus',
  authorLastName: 'Albuquerque',
  description: 'Developer, speaker, creator. Obsessed with performance and DX.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://www.ythecombinator.space',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/card.png',
  locale: 'en-US',
  // Social
  email: 'land@ythecombinator.space',
  github: 'https://github.com/ythecombinator',
  twitter: '@ythecombinator',
  avatar:
    'https://pbs.twimg.com/profile_images/1615068105977331712/TOWGdEEO_400x400.jpg',
};

export const socialNetworks = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/ythecombinator',
    Icon: FaTwitter,
  },
  {
    label: 'Github',
    href: 'https://github.com/ythecombinator',
    Icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ythecombinator',
    Icon: FaLinkedin,
  },
  {
    label: 'dev.to',
    href: 'https://dev.to/ythecombinator',
    Icon: FaDev,
  },
];

export enum Routes {
  base = '/',
  about = 'about',
  experience = 'about/experience',
  clients = 'about/clients',
  life = 'about/life',
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
  page = 'layout-page',
  blog = 'layout-blog-entry',
  biography = 'layout-biography-entry',
}

export const LayoutsMap: Record<Layouts, ComponentType<any>> = {
  'layout-biography-entry': LayoutBiographyEntry,
  'layout-page': LayoutPage,
  'layout-blog-entry': LayoutBlogEntry,
};
