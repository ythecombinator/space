import siteMetadata, { twitter } from 'data/siteMetadata';

export const discussOnTwitter = (title: string, path: string) => {
  const twitterURI = 'https://twitter.com/intent/tweet';
  const shareURL = new URL(twitterURI);

  const text = `${title} by ${twitter}`;
  const link = `${siteMetadata.siteUrl}/${path}`;

  shareURL.searchParams.set('url', link);
  shareURL.searchParams.set('text', text);

  return shareURL.toString();
};
