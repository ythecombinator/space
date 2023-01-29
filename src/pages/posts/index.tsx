import { allBlogs } from 'contentlayer/generated';
import { InferGetStaticPropsType, NextPage } from 'next';
import { Suspense, useState } from 'react';

import { Routes } from 'config/constants';
import { siteMetadata } from 'config/constants';

import { getAllFilesFrontMatter } from 'services/mdx';

import { toIndexableCollection } from 'utils/search';

import SeachBar, { SeachBarProps } from 'components/shared/seach-bar';
import PageSEO from 'components/shared/seo-page';

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

export async function getStaticProps() {
  // const allPostsRaw = await getAllFilesFrontMatter(Routes.posts);
  const allPosts = allBlogs.map((post) => ({
    ...post,
    _tags: toIndexableCollection(post.tags),
  }));

  return { props: { allPosts } };
}

/*~
 * PAGE
 */

const PostsPage: NextPage<Props> = ({ allPosts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChange: SeachBarProps['onChange'] = (evt) => {
    setSearchTerm(evt.target.value);
  };

  return (
    <>
      <PageSEO
        title={`Posts by ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <Layout
        heading="Posts"
        subHeading={<SeachBar label={`Search posts`} onChange={onChange} />}
      >
        <Suspense fallback={<AllPostsSectionSkeleton items={3} />}>
          <AllPostsSection items={allPosts} searchTerm={searchTerm} />
        </Suspense>
      </Layout>
    </>
  );
};

export default PostsPage;
