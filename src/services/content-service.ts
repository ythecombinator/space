export abstract class ContentService<T> {
  public abstract find(searchTerm: string): Promise<T>;
  public abstract get(id: string): Promise<T>;
  public abstract getAll(): Promise<Array<T>>;
}
