import { NextPage } from 'next';

import { siteMetadata } from 'config/constants';

import PageSEO from 'components/shared/seo-page';

import Layout from 'components/layouts/layout-page';

import OverviewSection from 'components/pages/about/overview-section';

/*~
 * PAGE
 */

const AboutPage: NextPage = () => {
  return (
    <>
      <PageSEO
        title={`About by ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <Layout heading="About">
        <OverviewSection />
      </Layout>
    </>
  );
};

export default AboutPage;
