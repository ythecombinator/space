import { siteMetadata } from 'config/constants';

export const discussOnTwitter = (title: string, path: string) => {
  const twitterURI = 'https://twitter.com/intent/tweet';
  const shareURL = new URL(twitterURI);

  const text = `${title} by ${siteMetadata.twitterHandle}`;
  const link = `${siteMetadata.siteUrl}/${path}`;

  shareURL.searchParams.set('url', link);
  shareURL.searchParams.set('text', text);

  return shareURL.toString();
};

export const discussOnLinkedIn = (path: string) => {
  const linkedInURI = 'https://www.linkedin.com/sharing/share-offsite';
  const shareURL = new URL(linkedInURI);

  const link = `${siteMetadata.siteUrl}/${path}`;

  shareURL.searchParams.set('url', link);

  return shareURL.toString();
};

export const discussOnReddit = (title: string, path: string) => {
  const redditURI = 'https://reddit.com/submit';
  const shareURL = new URL(redditURI);

  const link = `${siteMetadata.siteUrl}/${path}`;

  shareURL.searchParams.set('url', link);
  shareURL.searchParams.set('title', title);

  return shareURL.toString();
};
