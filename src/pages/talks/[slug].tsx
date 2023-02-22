import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { Routes, siteMetadata } from 'config/constants';

import TalksContentService from 'services/talks-content-service';

import { generateOpenGraphImage } from 'utils/open-graph';

import PageSEO from 'components/shared/seo-page';

import Layout from 'components/layouts/layout-page';

import EventsSection from 'components/pages/talk/events-section';
import OverviewSection from 'components/pages/talk/overview-section';

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

  const ogImage = await generateOpenGraphImage({
    title: talkData.title!,
    postPath: `${Routes.talks}/${id}`,
    path: `content/${Routes.talks}/${id}/cover.png`,
  });

  if (!talkData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { ...talkData, ogImage },
  };
}

/*~
 * PAGE
 */

const TalkPage: NextPage<Props> = (props) => {
  const { title, abstract, sessions, ogImage } = props;
  console.log('ogImage', ogImage);

  return (
    <>
      <PageSEO
        title={`${title} by ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <Layout heading={title!}>
        <OverviewSection abstract={abstract} />
        <EventsSection items={sessions} />
      </Layout>
    </>
  );
};

export default TalkPage;
