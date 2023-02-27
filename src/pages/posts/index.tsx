import { InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo as Metadata } from 'next-seo';
import { Suspense, useState } from 'react';

import { siteMetadata } from 'config/constants';

import PostsContentService from 'services/posts-content-service';

import SearchBar, { SearchBarProps } from 'components/shared/seach-bar';

import Layout from 'components/layouts/layout-page';

import AllPostsSection from 'components/pages/posts/all-posts-section';
import AllPostsSectionSkeleton from 'components/pages/posts/all-posts-section-skeleton';

/*~
 * TYPES
 */

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * NEXTJS
 */

const postsServiceInstance = PostsContentService.getInstance();

export async function getStaticProps() {
  const allPosts = postsServiceInstance.getAll();
  return { props: { allPosts } };
}

/*~
 * PAGE
 */

const PostsPage: NextPage<Props> = ({ allPosts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChange: SearchBarProps['onChange'] = (evt) => {
    setSearchTerm(evt.target.value);
  };

  return (
    <>
      <Metadata
        title={`Posts | ${siteMetadata.title}`}
        description="Ideas. Stories. Updates."
      />
      <Layout
        heading="Ideas. Stories. Updates."
        headingGradientMask
        subHeading={<SearchBar label={`Search posts`} onChange={onChange} />}
      >
        <Suspense fallback={<AllPostsSectionSkeleton items={3} />}>
          <AllPostsSection items={allPosts} searchTerm={searchTerm} />
        </Suspense>
      </Layout>
    </>
  );
};

export default PostsPage;
