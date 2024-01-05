import { allMDXEntries, MDXEntry as RawMDXEntry } from 'contentlayer/generated';
import { CoreContent } from 'pliny/utils/contentlayer';

import ContentlayerService from 'services/providers/contentlayer';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type MDXEntry = CoreContent<RawMDXEntry>;
export type { RawMDXEntry };

//  ---------------------------------------------------------------------------
//  CORE
//  ---------------------------------------------------------------------------

export default class MarkdownContentService extends ContentlayerService<MDXEntry> {
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
    return allMDXEntries;
  }
}
