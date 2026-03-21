import { allBlogEntries, BlogEntry as RawBlogEntry } from 'contentlayer/generated';
import { CoreContent } from 'pliny/utils/contentlayer';

import ContentlayerService from 'services/providers/contentlayer';

import { sortEntries } from 'utils/contentlayer';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type BlogEntry = CoreContent<RawBlogEntry>;
export type { RawBlogEntry };

//  ---------------------------------------------------------------------------
//  CORE
//  ---------------------------------------------------------------------------

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
      _tags: post.tags,
    }));
  }
}
