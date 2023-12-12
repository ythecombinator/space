import { InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo as Metadata } from 'next-seo';
import { Suspense, useState } from 'react';

import { Routes, siteMetadata } from 'config/constants';

import TalksContentService from 'services/content/talks';

import { generateOpenGraphImage } from 'utils/open-graph';

import SearchBar, { SearchBarProps } from 'components/shared/seach-bar';

import Layout from 'components/layouts/layout-page';

import ActiveTalksSection from 'components/pages/talks/active-talks-section';
import AllTalksSection from 'components/pages/talks/all-talks-section';
import AllTalksSectionSkeleton from 'components/pages/talks/all-talks-section-skeleton';
import OverviewSection from 'components/pages/talks/overview-section';
import PhotoHighlightsSection from 'components/pages/talks/photo-highlights-section';
import TopicHighlightsSection from 'components/pages/talks/topic-highlights-section';
import YoutubeHighlightsSection from 'components/pages/talks/youtube-highlights-section';

const metadata = {
  title: `Talks — ${siteMetadata.title}`,
  description: 'Confs. Meetups. More.',
};

/*~
 * TYPES
 */

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * NEXTJS
 */

const talksServiceInstance = TalksContentService.getInstance();

export async function getStaticProps() {
  const [talksStats, reactTalks, featuredTalks, youtubeHighlights, activeTalks, allTalks] = await Promise.all([
    talksServiceInstance.getStats(),
    talksServiceInstance.getTalksForTag('react'),
    talksServiceInstance.getFeatured(),
    talksServiceInstance.getYoutubeHighlights(),
    talksServiceInstance.getActive(),
    talksServiceInstance.getAll(),
  ]);

  const ogImage = await generateOpenGraphImage({
    title: `🎙️ ${metadata.description}`,
    postPath: Routes.talks,
    path: `content/${Routes.talks}/cover.png`,
  });

  return {
    props: { talksStats, reactTalks, featuredTalks, youtubeHighlights, activeTalks, allTalks, ogImage },
  };
}

/*~
 * PAGE
 */

const TalksPage: NextPage<Props> = (props) => {
  const { talksStats, allTalks, reactTalks, featuredTalks, youtubeHighlights, activeTalks, ogImage } = props;

  const [searchTerm, setSearchTerm] = useState('');

  const onChange: SearchBarProps['onChange'] = (evt) => {
    setSearchTerm(evt.target.value);
  };

  return (
    <>
      <Metadata
        title={metadata.title}
        description={metadata.description}
        openGraph={{
          type: 'website',
          title: metadata.title,
          description: metadata.description,
          images: [{ url: ogImage }],
        }}
      />
      <Layout
        heading={metadata.description}
        headingGradient="borealis"
        subHeading={<SearchBar label={`Search topics, events and places`} onChange={onChange} />}
      >
        <OverviewSection {...talksStats} />

        <Suspense fallback={<AllTalksSectionSkeleton items={5} />}>
          <AllTalksSection items={allTalks} searchTerm={searchTerm} />
        </Suspense>

        <ActiveTalksSection items={activeTalks} />
        <TopicHighlightsSection title="⚛️ React Highlights" items={reactTalks} />
        <YoutubeHighlightsSection items={youtubeHighlights} />
        <PhotoHighlightsSection items={featuredTalks} />
      </Layout>
    </>
  );
};

export default TalksPage;
