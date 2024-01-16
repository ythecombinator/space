import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo as Metadata } from 'next-seo';
import { ParsedUrlQuery } from 'querystring';

import { Layouts, Routes, siteMetadata } from 'config/constants';

import MarkdownContentService from 'services/content/markdown';

import MDXLayoutRenderer from 'components/shared/mdx-components';
import { generateOpenGraphImage } from 'utils/open-graph';

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

const markdownServiceInstance = MarkdownContentService.getInstance();

export async function getStaticPaths() {
  const paths = markdownServiceInstance
    .getAllSlugs()
    // Those are present under the /pages/about/ directory.
    .filter((slug) => slug !== 'experience');

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
  const content = markdownServiceInstance.get(slug);

  if (!content) {
    return {
      notFound: true,
    };
  }

  const openGraphImage = await generateOpenGraphImage({
    title: content.title,
    path: `content/${Routes.about}/${slug}/cover.png`,
    type: Routes.about,
  });

  return { props: { content, openGraphImage } };
}

const Page: NextPage<PageProps> = ({ content, openGraphImage }) => {
  return (
    <>
      <Metadata
        title={`About — ${siteMetadata.title}`}
        openGraph={{
          type: 'profile',
          profile: {
            firstName: siteMetadata.authorFirstName,
            lastName: siteMetadata.authorLastName,
            username: siteMetadata.twitterHandle,
          },
          images: [{ url: openGraphImage }],
        }}
      />
      <MDXLayoutRenderer layout={Layouts.mdx} content={content} />
    </>
  );
};

export default Page;
