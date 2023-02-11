import { FunctionComponent } from 'react';
import {
  FaDev,
  FaGithub,
  FaLinkedin,
  FaSpeakerDeck,
  FaTwitter,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { ExternalLink } from 'types/link';

import LayoutAbout from 'components/layouts/layout-about';
import LayoutPage from 'components/layouts/layout-page';
import LayoutPost from 'components/layouts/layout-post';

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
  post = 'layout-post',
  page = 'layout-page',
  about = 'layout-about',
}

export const LayoutsMap: Record<Layouts, FunctionComponent<any>> = {
  'layout-about': LayoutAbout,
  'layout-page': LayoutPage,
  'layout-post': LayoutPost,
};

export enum SourcePath {
  content = 'src/content',
}
