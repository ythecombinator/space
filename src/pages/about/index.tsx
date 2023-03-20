import { NextPage } from 'next';
import { NextSeo as Metadata } from 'next-seo';

import { siteMetadata } from 'config/constants';

import Layout from 'components/layouts/layout-page';

import OverviewSection from 'components/pages/about/overview-section';

/*~
 * PAGE
 */

const AboutPage: NextPage = () => {
  return (
    <>
      <Metadata
        title={`About / ${siteMetadata.title}`}
        openGraph={{
          type: 'profile',
          profile: {
            firstName: siteMetadata.authorFirstName,
            lastName: siteMetadata.authorLastName,
            username: siteMetadata.twitterHandle,
          },
          images: [
            {
              url: siteMetadata.avatar,
              width: 400,
              height: 400,
            },
          ],
        }}
      />
      <Layout heading="Build. Share. Rewind." headingGradient="cottonCandy">
        <OverviewSection />
      </Layout>
    </>
  );
};

export default AboutPage;
