import {
  allBlogEntries,
  BlogEntry as RawBlogEntry,
} from 'contentlayer/generated';

import ContentlayerService from 'services/contentlayer-service';

import { CoreContent, sortEntries } from 'utils/contentlayer';
import { toIndexableCollection } from 'utils/search';

/*~
 * TYPES
 */

export type BlogEntry = CoreContent<RawBlogEntry>;

/*~
 * SERVICE
 */

export default class PostsContentService extends ContentlayerService<BlogEntry> {
  private static instance: PostsContentService;

  static getInstance() {
    if (!this.instance) {
      this.instance = new PostsContentService();
    }

    return this.instance;
  }

  public get(id: string) {
    return this.getAll().find((post) => {
      return post.slug === id;
    });
  }

  public getAll() {
    return sortEntries(allBlogEntries).map((post) => ({
      ...post,
      _tags: toIndexableCollection(post.tags),
    }));
  }
}
