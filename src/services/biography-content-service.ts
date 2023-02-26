import {
  allBiographyEntries,
  BiographyEntry as RawBiographyEntry,
} from 'contentlayer/generated';
import { CoreContent } from 'pliny/utils/contentlayer';

import ContentlayerService from 'services/contentlayer-service';

/*~
 * TYPES
 */

export type BiographyEntry = CoreContent<RawBiographyEntry>;
export type { RawBiographyEntry };

/*~
 * SERVICE
 */

export default class BiographyContentService extends ContentlayerService<BiographyEntry> {
  private static instance: BiographyContentService;

  static getInstance() {
    if (!this.instance) {
      this.instance = new BiographyContentService();
    }

    return this.instance;
  }

  public get(id: string) {
    return this.getAll().find((item) => {
      return item.slug === id;
    });
  }

  public getAll() {
    return allBiographyEntries;
  }
}
