import { mdxEntries } from '#velite';

import ContentService from 'services/providers/content';

import { CoreContent } from 'utils/content';

export type RawMDXEntry = (typeof mdxEntries)[number];
export type MDXEntry = CoreContent<RawMDXEntry>;

export default class MarkdownContentService extends ContentService<MDXEntry> {
  private static instance: MarkdownContentService;

  static getInstance() {
    if (!this.instance) {
      this.instance = new MarkdownContentService();
    }

    return this.instance;
  }

  public get(id: string) {
    return this.getAll().find((item) => {
      return item.slug === id;
    });
  }

  public getAll() {
    return mdxEntries;
  }
}
