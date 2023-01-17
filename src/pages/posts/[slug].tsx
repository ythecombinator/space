import fs from 'fs';
import generateRSS from 'lib/generate-rss';
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { Layouts, Routes } from 'config/constants';

import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from 'utils/mdx';

import { MDXLayoutRenderer } from 'components/shared/MDXComponents';

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

export async function getStaticPaths() {
  const posts = getFiles(Routes.posts);
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext<Params>) {
  const allPosts = await getAllFilesFrontMatter(Routes.posts);
  const slug = context.params?.slug!;

  const post = await getFileBySlug(Routes.posts, slug);

  // RSS
  if (allPosts.length > 0) {
    const rss = generateRSS(allPosts);
    fs.writeFileSync('./public/feed.xml', rss);
  }

  return { props: { post } };
}

/*~
 * PAGE
 */

const PostPage: NextPage<Props> = ({ post }) => {
  const { mdxSource, toc, frontMatter } = post;

  return (
    <MDXLayoutRenderer
      layout={Layouts.post}
      toc={toc}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  );
};

export default PostPage;
