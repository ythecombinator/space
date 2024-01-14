import fs from 'fs';
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { ArticleJsonLd, NextSeo as Metadata } from 'next-seo';
import { ParsedUrlQuery } from 'querystring';

import { Layouts, Routes, siteMetadata } from 'config/constants';

import PostsContentService from 'services/content/posts';
import XEService from 'services/providers/xe';

import { CurrencyContext } from 'utils/currency';
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
const currencyServiceInstance = XEService.getInstance();

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

  // Currency data is available for blog posts.
  const czkRates = await currencyServiceInstance.getRates('CZK');
  const rates = { CZK: czkRates };

  const openGraphImage = await generateOpenGraphImage({
    title: post.title,
    postPath: `${Routes.posts}/${post.slug}`,
    path: `content/${Routes.posts}/${post.slug}/cover.png`,
  });

  return { props: { post, rates, openGraphImage } };
}

const Page: NextPage<PageProps> = ({ post, rates, openGraphImage }) => {
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
        images={[cover]}
        datePublished={date}
        authorName={siteMetadata.author}
        description={summary}
      />
      <CurrencyContext.Provider value={rates}>
        <MDXLayoutRenderer layout={Layouts.blog} content={post} />
      </CurrencyContext.Provider>
    </>
  );
};

export default Page;
