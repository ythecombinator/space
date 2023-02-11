import { allPosts } from 'contentlayer/generated';

import { toIndexableCollection } from 'utils/search';

export type { Post } from 'contentlayer/generated';

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
    return allPosts.map((post) => ({
      ...post,
      _tags: toIndexableCollection(post.tags),
    }));
  }

  public getAllSlugs() {
    return allPosts.map((post) => post.slug);
  }
}
