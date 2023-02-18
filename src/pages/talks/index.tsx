import { InferGetStaticPropsType, NextPage } from 'next';
import { Suspense, useState } from 'react';

import { siteMetadata } from 'config/constants';

import TalksContentService from 'services/talks-content-service';

import SeachBar, { SeachBarProps } from 'components/shared/seach-bar';
import PageSEO from 'components/shared/seo-page';

import Layout from 'components/layouts/layout-page';

import ActiveTalksSection from 'components/pages/talks/active-talks-section';
import AllTalksSection from 'components/pages/talks/all-talks-section';
import AllTalksSectionSkeleton from 'components/pages/talks/all-talks-section-skeleton';
import OverviewSection from 'components/pages/talks/overview-section';
import PhotoHighlightsSection from 'components/pages/talks/photo-highlights-section';
import VideoHighlightsSection from 'components/pages/talks/video-highlights-section';

/*~
 * TYPES
 */

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * NEXTJS
 */

const talksServiceInstance = TalksContentService.getInstance();

export async function getStaticProps() {
  const [talksStats, featuredTalks, activeTalks, allTalks] = await Promise.all([
    talksServiceInstance.getStats(),
    talksServiceInstance.getFeatured(),
    talksServiceInstance.getActive(),
    talksServiceInstance.getAll(),
  ]);

  return {
    props: { talksStats, featuredTalks, activeTalks, allTalks },
  };
}

/*~
 * PAGE
 */

const TalksPage: NextPage<Props> = (props) => {
  const { talksStats, allTalks, featuredTalks, activeTalks } = props;

  const [searchTerm, setSearchTerm] = useState('');

  const onChange: SeachBarProps['onChange'] = (evt) => {
    setSearchTerm(evt.target.value);
  };

  return (
    <>
      <PageSEO
        title={`Talks by ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <Layout
        heading="Confs, Meetups & More"
        subHeading={
          <SeachBar
            label={`Search topics, events and places`}
            onChange={onChange}
          />
        }
      >
        <OverviewSection {...talksStats} />

        <Suspense fallback={<AllTalksSectionSkeleton items={5} />}>
          <AllTalksSection items={allTalks} searchTerm={searchTerm} />
        </Suspense>

        <VideoHighlightsSection items={featuredTalks} />
        <ActiveTalksSection items={activeTalks} />

        <PhotoHighlightsSection items={featuredTalks} />
      </Layout>
    </>
  );
};

export default TalksPage;
