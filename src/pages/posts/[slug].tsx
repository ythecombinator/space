import fs from 'fs';
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { Layouts } from 'config/constants';

import PostsContentService from 'services/posts-content-service';

import { generateRSS } from 'utils/rss';

import MDXLayoutRenderer from 'components/shared/mdx-components';

/*~
 * TYPES
 */

interface Params extends ParsedUrlQuery {
  slug: string;
}

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * NEXTJS
 */

const postsServiceInstance = PostsContentService.getInstance();

export async function getStaticPaths() {
  const paths = postsServiceInstance.getAllSlugs();
  return {
    paths: paths.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext<Params>) {
  const slug = context.params?.slug!;

  const post = postsServiceInstance.get(slug);
  const allPosts = postsServiceInstance.getAll();

  // RSS
  if (allPosts.length > 0) {
    const rss = generateRSS(allPosts);
    fs.writeFileSync('./public/feed.xml', rss);
  }

  if (!post) {
    return {
      notFound: true,
    };
  }

  return { props: { post } };
}

/*~
 * PAGE
 */

const PostPage: NextPage<Props> = ({ post }) => {
  return <MDXLayoutRenderer layout={Layouts.blog} content={post} />;
};

export default PostPage;
