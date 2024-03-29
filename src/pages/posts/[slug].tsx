import fs from 'fs';
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { ArticleJsonLd, NextSeo as Metadata } from 'next-seo';
import { ParsedUrlQuery } from 'querystring';

import { Layouts, Routes, siteMetadata } from 'config/constants';

import PostsContentService from 'services/content/posts';

import { generateOpenGraphImage } from 'utils/open-graph';
import { generateRSS } from 'utils/rss';
import { usePathName } from 'utils/url';

import MDXLayoutRenderer from 'components/shared/mdx-components';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface Params extends ParsedUrlQuery {
  slug: string;
}

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

//  ---------------------------------------------------------------------------
//  NEXT
//  ---------------------------------------------------------------------------

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

  const openGraphImage = await generateOpenGraphImage({
    title: post.title,
    path: `content/${Routes.posts}/${post.slug}/cover.png`,
    type: Routes.posts,
  });

  return { props: { post, openGraphImage } };
}

const Page: NextPage<PageProps> = ({ post, openGraphImage }) => {
  const { title, summary, tags, date } = post;
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
          images: [{ url: openGraphImage }],
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
        images={[openGraphImage]}
        datePublished={date}
        authorName={siteMetadata.author}
        description={summary}
      />
      <MDXLayoutRenderer layout={Layouts.blog} content={post} />
    </>
  );
};

export default Page;
