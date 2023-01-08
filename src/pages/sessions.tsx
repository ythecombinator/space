import { getAllFilesFrontMatter } from 'lib/mdx';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ComponentProps } from 'react';

import BlogListLayout from 'components/layouts/BlogListLayout';
import ListLayout from 'components/layouts/ListLayout';

export const POSTS_PER_PAGE = 10;

export const getStaticProps: GetStaticProps<{
  posts: ComponentProps<typeof ListLayout>['posts'];
  initialDisplayPosts: ComponentProps<typeof ListLayout>['initialDisplayPosts'];
  pagination: ComponentProps<typeof ListLayout>['pagination'];
}> = async () => {
  const posts = await getAllFilesFrontMatter('blog');
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };

  return { props: { initialDisplayPosts, posts, pagination } };
};

export default function Blog({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {/* <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} /> */}
      <BlogListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="Talks"
      />
    </>
  );
}
