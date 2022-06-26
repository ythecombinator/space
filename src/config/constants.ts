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

export enum NavigationPath {
  base = '/',
  work = '/work',
  life = '/life',
  writing = '/writing',
  talks = '/talks',
  coding = '/coding',
  setupSoftware = '/setup/software',
  setupHardware = '/setup/hardware',
  tags = '/tags',
}

export enum SourcePath {
  content = 'src/content',
}
