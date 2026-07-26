import { blogEntries } from '#velite';

import ContentService from 'services/providers/content';

import { CoreContent } from 'utils/content';
import { sortEntries } from 'utils/contentlayer';

export type RawBlogEntry = (typeof blogEntries)[number];
export type BlogEntry = CoreContent<RawBlogEntry>;

export default class PostsContentService extends ContentService<BlogEntry> {
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
    return sortEntries(blogEntries).map((post) => ({
      ...post,
      _tags: post.tags,
    }));
  }
}
