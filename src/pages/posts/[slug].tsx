import fs from 'fs';
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { ArticleJsonLd, NextSeo as Metadata } from 'next-seo';
import { ParsedUrlQuery } from 'querystring';

import { Layouts, siteMetadata } from 'config/constants';

import PostsContentService from 'services/posts-content-service';

import { generateRSS } from 'utils/rss';
import { usePathName } from 'utils/url';

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
  const { title, summary, tags, date, cover } = post;
  const url = usePathName();

  return (
    <>
      <Metadata
        title={title}
        description={summary}
        openGraph={{
          type: 'article',
          title,
          description: summary,
          article: {
            publishedTime: date,
            authors: [siteMetadata.siteUrl],
            tags,
          },
        }}
      />
      <ArticleJsonLd
        type="BlogPosting"
        url={url}
        title={title}
        images={[cover]}
        datePublished={date}
        authorName={siteMetadata.author}
        description={summary}
      />
      <MDXLayoutRenderer layout={Layouts.blog} content={post} />
    </>
  );
};

export default PostPage;
