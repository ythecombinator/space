import { allAbouts } from 'contentlayer/generated';

export type { About } from 'contentlayer/generated';

export default class AboutContentService {
  private static instance: AboutContentService;

  static getInstance() {
    if (!this.instance) {
      this.instance = new AboutContentService();
    }

    return this.instance;
  }

  public get(id: string) {
    return this.getAll().find((item) => {
      return item.slug === id;
    });
  }

  public getAll() {
    return allAbouts;
  }

  public getAllSlugs() {
    return this.getAll().map((item) => item.slug);
  }
}
