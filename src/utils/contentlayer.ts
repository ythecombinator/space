export function dateSortDesc(a: string, b: string) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

export function sortEntries<T extends { date: string }>(entries: Array<T>) {
  return entries.sort((a, b) => dateSortDesc(a.date, b.date));
}
