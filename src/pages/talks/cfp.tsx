import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo as Metadata } from 'next-seo';
import { ParsedUrlQuery } from 'querystring';

import { siteMetadata } from 'config/constants';

import TalksCFPContentService from 'services/talks-cfp-content-service';

import Layout from 'components/layouts/layout-page';

import ListSection from 'components/pages/talks-cfp/list-section';
import OverviewSection from 'components/pages/talks-cfp/overview-section';

const metadata = {
  title: `Talks / CFPs / ${siteMetadata.title}`,
  description: 'CFPs. Rejections. Open.',
};

/*~
 * TYPES
 */

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * NEXTJS
 */

const talksCFPServiceInstance = TalksCFPContentService.getInstance();

export async function getStaticProps() {
  const data = await talksCFPServiceInstance.getAll();

  return {
    props: {
      data,
    },
  };
}

/*~
 * PAGE
 */

const TalkPage: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Metadata title={metadata.title} description={metadata.description} />
      <Layout heading={metadata.description} headingGradient="sublime">
        <OverviewSection />
        <ListSection data={data} />
      </Layout>
    </>
  );
};

export default TalkPage;
