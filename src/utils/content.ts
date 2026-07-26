export type CoreContent<T extends { body?: unknown }> = Omit<T, 'body'>;

export function coreContent<T extends { body?: unknown }>(content: T): CoreContent<T> {
  const { body: _, ...rest } = content;
  return rest;
}
