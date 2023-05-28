import { siteMetadata } from 'config/constants';

export const formatDate = (dateString: string) =>
  new Intl.DateTimeFormat(siteMetadata.locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateString));

export const isSingleDayTimeSpan = (
  startingDate: string,
  endingDate: string
) => {
  return formatDate(startingDate) === formatDate(endingDate);
};

export type FormattedDate = {
  raw: string;
  formatted: string;
};
