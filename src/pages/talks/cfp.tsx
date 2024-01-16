import { InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo as Metadata } from 'next-seo';

import { Routes, siteMetadata } from 'config/constants';

import TalksCFPContentService from 'services/content/cfp';

import { MetadataConfig, generateOpenGraphImage } from 'utils/open-graph';

import SectionContainer from 'components/shared/section-container';
import Typography from 'components/shared/typography';

import Layout from 'components/layouts/page';

import ListSection from 'components/pages/talks-cfp/list-section';

//  ---------------------------------------------------------------------------
//  CONFIG
//  ---------------------------------------------------------------------------

const metadata: MetadataConfig = {
  title: `Call for Papers — ${siteMetadata.title}`,
  description: 'Call for Papers',
};

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

//  ---------------------------------------------------------------------------
//  NEXT
//  ---------------------------------------------------------------------------

const talksCFPServiceInstance = TalksCFPContentService.getInstance();

export async function getStaticProps() {
  const data = await talksCFPServiceInstance.getAll();

  const openGraphImage = await generateOpenGraphImage({
    title: metadata.description,
    path: `content/${Routes.talksCFP}/cover.png`,
    type: Routes.talks,
  });

  return {
    props: {
      data,
      openGraphImage,
    },
  };
}

const Page: NextPage<Props> = ({ data, openGraphImage }) => {
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
      <Layout heading={metadata.description} headingGradient="sublime">
        <SectionContainer className="prose dark:prose-invert">
          <Typography.p>
            Coordinating the whole process of submitting different sessions across different events in different parts
            of the globe is hard!
          </Typography.p>
          <Typography.p>
            I used to track these using a Trello board combined with different Google Documents. I wasn’t happy with the
            way things were going already — it simply didn’t scale — and when I faced myself about to add a third app to
            the equation (Google Calendar), I decided it was about time to shift to something else.
          </Typography.p>
          <Typography.p>
            In 2022, I decided to try Notion as my all-in-one sessions ↔ conferences solution — and it worked really
            well in my opinion.
          </Typography.p>
          <Typography.p>
            In 2023, I realized that many speakers could benefit from insights around conferences, so I decided to make
            this open data part of my personal page!
          </Typography.p>
        </SectionContainer>
        <ListSection data={data} />
      </Layout>
    </>
  );
};

export default Page;
