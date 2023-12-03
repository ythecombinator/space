import { ComponentType } from 'react';
import { FaDev, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import LayoutMDXEntry from 'components/layouts/layout-mdx-entry';
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
  socialBanner: 'https://www.ythecombinator.space/content/cover.png',
  locale: 'en-US',
  // Social
  email: 'land@ythecombinator.space',
  linkedin: 'https://www.linkedin.com/in/ythecombinator',
  github: 'https://github.com/ythecombinator',
  twitterHandle: '@ythecombinator',
  twitter: 'https://twitter.com/ythecombinator',
  avatar: 'https://avatars.githubusercontent.com/u/2644563?v=4',
};

export const socialNetworks = [
  {
    label: 'Twitter',
    href: siteMetadata.twitter,
    Icon: FaTwitter,
  },
  {
    label: 'Github',
    href: siteMetadata.github,
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
  talksCFP = 'talks/cfp',
  talksRider = 'talks/rider',
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
  mdx = 'layout-mdx-entry',
}

export const LayoutsMap: Record<Layouts, ComponentType<any>> = {
  'layout-mdx-entry': LayoutMDXEntry,
  'layout-page': LayoutPage,
  'layout-blog-entry': LayoutBlogEntry,
};
