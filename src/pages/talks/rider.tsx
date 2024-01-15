import { InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo as Metadata } from 'next-seo';

import { Layouts, Routes, siteMetadata } from 'config/constants';

import MarkdownContentService from 'services/content/markdown';

import { generateOpenGraphImage } from 'utils/open-graph';

import MDXLayoutRenderer from 'components/shared/mdx-components';

//  ---------------------------------------------------------------------------
//  CONFIG
//  ---------------------------------------------------------------------------

const metadata = {
  title: `Speaker Rider — ${siteMetadata.title}`,
  description: 'Your Event & I!',
};

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

//  ---------------------------------------------------------------------------
//  NEXT
//  ---------------------------------------------------------------------------

const markdownServiceInstance = MarkdownContentService.getInstance();

export async function getStaticProps() {
  const content = markdownServiceInstance.get('speaker-rider');

  if (!content) {
    return {
      notFound: true,
    };
  }

  const openGraphImage = await generateOpenGraphImage({
    title: metadata.title,
    path: `content/${Routes.talksRider}/cover.png`,
  });

  return { props: { content, openGraphImage } };
}

const Page: NextPage<PageProps> = ({ content, openGraphImage }) => {
  return (
    <>
      <Metadata
        title={metadata.title}
        description={metadata.description}
        openGraph={{
          type: 'website',
          title: metadata.title,
          description: metadata.description,
          images: [{ url: openGraphImage }],
        }}
      />
      <MDXLayoutRenderer layout={Layouts.mdx} content={content} />
    </>
  );
};

export default Page;
