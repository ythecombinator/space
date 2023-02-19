import { ComponentType, FunctionComponent } from 'react';
import {
  FaDev,
  FaGithub,
  FaLinkedin,
  FaSpeakerDeck,
  FaTwitter,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { ExternalLink } from 'types/link';

import LayoutBiographyEntry from 'components/layouts/layout-biography-entry';
import LayoutBlogEntry from 'components/layouts/layout-blog-entry';
import LayoutPage from 'components/layouts/layout-page';

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
  avatar: 'https://pbs.twimg.com/profile_images/1615068105977331712/TOWGdEEO_400x400.jpg',
  locale: 'en-US',
};

export const socialNetworks: Array<ExternalLink & { Icon: IconType }> = [
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
  work = 'about/work',
  clients = 'about/clients',
  life = 'about/life',
  uses = 'about/uses',
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

export enum SourcePath {
  content = 'src/content',
}
