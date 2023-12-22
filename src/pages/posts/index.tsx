import { InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo as Metadata } from 'next-seo';
import { Suspense, useState } from 'react';

import { Routes, siteMetadata } from 'config/constants';

import PostsContentService from 'services/content/posts';

import { generateOpenGraphImage } from 'utils/open-graph';

import SearchBar, { SearchBarProps } from 'components/shared/seach-bar';

import Layout from 'components/layouts/page';

import AllPostsSection from 'components/pages/posts/all-posts-section';
import AllPostsSectionSkeleton from 'components/pages/posts/all-posts-section-skeleton';

const metadata = {
  title: `Posts — ${siteMetadata.title}`,
  description: 'Ideas. Stories. Updates.',
};

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

  const ogImage = await generateOpenGraphImage({
    title: `✍️ ${metadata.description}`,
    postPath: Routes.posts,
    path: `content/${Routes.posts}/cover.png`,
  });

  return { props: { allPosts, ogImage } };
}

/*~
 * PAGE
 */

const PostsPage: NextPage<Props> = ({ allPosts, ogImage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onChange: SearchBarProps['onChange'] = (evt) => {
    setSearchTerm(evt.target.value);
  };

  return (
    <>
      <Metadata
        title={metadata.title}
        description={metadata.description}
        openGraph={{
          type: 'website',
          title: metadata.title,
          description: metadata.description,
          images: [{ url: ogImage }],
        }}
      />
      <Layout
        heading={metadata.description}
        headingGradient="minnesota"
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
