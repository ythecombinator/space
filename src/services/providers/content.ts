export default abstract class ContentService<T extends { slug: string }> {
  abstract get(id: string): T | undefined;

  abstract getAll(): Array<T>;

  public getAllSlugs() {
    return this.getAll().map((item) => item.slug);
  }
}
