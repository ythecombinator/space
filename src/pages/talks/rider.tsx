import { InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo as Metadata } from 'next-seo';

import { Layouts, Routes, siteMetadata } from 'config/constants';

import MarkdownContentService from 'services/content/markdown';
import TalksContentService from 'services/content/talks';

import { MetadataConfig, generateOpenGraphImage } from 'utils/open-graph';

import MDXLayoutRenderer from 'components/shared/mdx-components';

import ActiveTalksSection from 'components/pages/talks/active-talks-section';

//  ---------------------------------------------------------------------------
//  CONFIG
//  ---------------------------------------------------------------------------

const metadata: MetadataConfig = {
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
const talksServiceInstance = TalksContentService.getInstance();

export async function getStaticProps() {
  const content = markdownServiceInstance.get('speaker-rider');

  if (!content) {
    return {
      notFound: true,
    };
  }

  const [activeTalks, openGraphImage] = await Promise.all([
    talksServiceInstance.getActive(),
    generateOpenGraphImage({
      title: metadata.description,
      path: `content/${Routes.talksRider}/cover.png`,
      type: Routes.talks,
    }),
  ]);

  return { props: { content, activeTalks, openGraphImage } };
}

const Page: NextPage<PageProps> = ({ content, activeTalks, openGraphImage }) => {
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
      <ActiveTalksSection items={activeTalks} />
    </>
  );
};

export default Page;
