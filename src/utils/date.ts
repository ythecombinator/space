import siteMetadata from 'data/siteMetadata';

export const formatDate = (dateString: string) =>
  new Intl.DateTimeFormat(siteMetadata.locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateString));
