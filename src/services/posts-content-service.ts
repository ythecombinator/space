import { allBlogs } from 'contentlayer/generated';

import { toIndexableCollection } from 'utils/search';

export type { Blog } from 'contentlayer/generated';

export default class PostsContentService {
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
    return allBlogs.map((post) => ({
      ...post,
      _tags: toIndexableCollection(post.tags),
    }));
  }

  public getAllSlugs() {
    return allBlogs.map((post) => post.slug);
  }
}
