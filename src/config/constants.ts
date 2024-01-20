import { ComponentType } from 'react';
import { FaDev, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import LayoutBlogEntry from 'components/layouts/blog-entry';
import LayoutMDXEntry from 'components/layouts/mdx-entry';
import LayoutPage from 'components/layouts/page';

export const siteMetadata = {
  title: 'Matheus Albuquerque',
  author: 'Matheus Albuquerque',
  authorFirstName: 'Matheus',
  authorLastName: 'Albuquerque',
  description: 'Developer, speaker, creator. Obsessed with performance and DX.',
  skills: ['JavaScript', 'TypeScript', 'React/Next.js/Remix', 'Node.js', 'GraphQL'],
  location: 'Prague, Czech Republic',
  locationLink: 'https://www.google.com/maps/place/Prague',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://www.albuquerque.dev',
  siteLogo: '/static/images/logo.png',
  socialBanner: 'https://www.albuquerque.dev/content/cover.png',
  locale: 'en-US',
  // Social
  email: 'matheus@albuquerque.dev',
  linkedin: 'https://www.linkedin.com/in/ythecombinator',
  github: 'https://github.com/ythecombinator',
  twitterHandle: '@ythecombinator',
  twitter: 'https://twitter.com/ythecombinator',
  avatar: 'https://avatars.githubusercontent.com/u/2644563?v=4',
};

export const socialNetworksMap = {
  Twitter: {
    label: 'Twitter',
    href: siteMetadata.twitter,
    Icon: FaXTwitter,
  },
  Github: {
    label: 'Github',
    href: siteMetadata.github,
    Icon: FaGithub,
  },
  LinkedIn: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ythecombinator',
    Icon: FaLinkedin,
  },
  DEV: {
    label: 'DEV',
    href: 'https://dev.to/ythecombinator',
    Icon: FaDev,
  },
} as const;

export const socialNetworks = Object.values(socialNetworksMap);

export enum Routes {
  base = '/',
  about = 'about',
  experience = 'about/experience',
  clients = 'about/clients',
  life = 'about/life',
  uses = 'about/uses',
  cv = 'cv',
  posts = 'posts',
  talks = 'talks',
  talksRadar = 'talks/radar',
  talksRider = 'talks/rider',
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
