import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo as Metadata } from 'next-seo';
import { ParsedUrlQuery } from 'querystring';

import { Routes } from 'config/constants';

import TalksContentService from 'services/content/talks';

import { documentToString } from 'utils/contentful';
import { generateOpenGraphImage } from 'utils/open-graph';

import SectionContainer from 'components/shared/section-container';
import Typography from 'components/shared/typography';

import Layout from 'components/layouts/page';

import EventsSection from 'components/pages/talk/events-section';

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

const talksServiceInstance = TalksContentService.getInstance();

export async function getStaticPaths() {
  const paths = await talksServiceInstance.getAllSlugs();
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
  const id = context.params?.slug!;
  const talkData = await talksServiceInstance.get(id);

  if (!talkData) {
    return {
      notFound: true,
    };
  }

  const openGraphImage = await generateOpenGraphImage({
    title: talkData.title!,
    path: `content/${Routes.talks}/${id}/cover.png`,
    type: Routes.talks,
  });

  return {
    props: { ...talkData, openGraphImage },
  };
}

const Page: NextPage<PageProps> = (props) => {
  const { title, abstract, sessions, openGraphImage } = props;
  const description = documentToString(abstract);

  return (
    <>
      <Metadata
        title={title}
        description={description}
        openGraph={{
          type: 'website',
          title,
          description,
          images: [{ url: openGraphImage }],
        }}
      />
      <Layout heading={title!}>
        <SectionContainer>
          {documentToReactComponents(abstract, {
            renderNode: {
              [BLOCKS.PARAGRAPH]: (_node, children) => <Typography.p>{children}</Typography.p>,
            },
          })}
        </SectionContainer>
        <EventsSection items={sessions} />
      </Layout>
    </>
  );
};

export default Page;
