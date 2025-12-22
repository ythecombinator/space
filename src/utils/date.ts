export function formatDate(dateString: string | number | null | undefined): string {
  if (!dateString) return '';

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateString));
}

export const isSingleDayTimeSpan = (startingDate: string | number, endingDate: string | number) => {
  return formatDate(startingDate) === formatDate(endingDate);
};

export type FormattedDate = {
  raw: string;
  formatted: string;
};
