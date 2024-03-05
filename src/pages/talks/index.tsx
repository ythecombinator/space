import { InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo as Metadata } from 'next-seo';
import { Suspense, useState } from 'react';

import { Routes, siteMetadata } from 'config/constants';

import TalksContentService from 'services/content/talks';

import { MetadataConfig, generateOpenGraphImage } from 'utils/open-graph';

import Link from 'components/shared/link';
import SearchBar, { SearchBarProps } from 'components/shared/seach-bar';
import SectionContainer from 'components/shared/section-container';
import Typography from 'components/shared/typography';

import Layout from 'components/layouts/page';

import ActiveTalksSection from 'components/pages/talks/active-talks-section';
import AllTalksSection from 'components/pages/talks/all-talks-section';
import AllTalksSectionSkeleton from 'components/pages/talks/all-talks-section-skeleton';
import PhotoHighlightsSection from 'components/pages/talks/photo-highlights-section';
import TopicHighlightsSection from 'components/pages/talks/topic-highlights-section';
import UpcomingTalksSection from 'components/pages/talks/upcoming-talks-section';
import YoutubeHighlightsSection from 'components/pages/talks/youtube-highlights-section';

//  ---------------------------------------------------------------------------
//  CONFIG
//  ---------------------------------------------------------------------------

const metadata: MetadataConfig = {
  title: `Talks — ${siteMetadata.title}`,
  description: 'Confs. Meetups. More.',
};

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

//  ---------------------------------------------------------------------------
//  NEXT
//  ---------------------------------------------------------------------------

const talksServiceInstance = TalksContentService.getInstance();

export async function getStaticProps() {
  const [talksStats, reactTalks, featuredTalks, youtubeHighlights, activeTalks, upcomingSessions, allTalks] =
    await Promise.all([
      talksServiceInstance.getStats(),
      talksServiceInstance.getTalksForTag('react'),
      talksServiceInstance.getFeatured(),
      talksServiceInstance.getYoutubeHighlights(),
      talksServiceInstance.getActive(),
      talksServiceInstance.getGetUpcomingSessions(),
      talksServiceInstance.getAll(),
    ]);

  const openGraphImage = await generateOpenGraphImage({
    title: metadata.description,
    path: `content/${Routes.talks}/cover.png`,
    type: Routes.talks,
  });

  return {
    props: {
      talksStats,
      reactTalks,
      featuredTalks,
      youtubeHighlights,
      activeTalks,
      upcomingSessions,
      allTalks,
      openGraphImage,
    },
  };
}

const Page: NextPage<Props> = (props) => {
  const {
    talksStats,
    allTalks,
    reactTalks,
    featuredTalks,
    youtubeHighlights,
    activeTalks,
    upcomingSessions,
    openGraphImage,
  } = props;
  const { citiesTotal, countriesTotal, talksTotal, eventsTotal } = talksStats;

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
          images: [{ url: openGraphImage }],
        }}
      />
      <Layout
        heading={metadata.description}
        headingGradient="borealis"
        subHeading={<SearchBar label={`Search topics, events and places`} onChange={onChange} />}
      >
        <SectionContainer className="prose dark:prose-invert">
          <Typography.p>
            {`I've`} been speaking and learning in public since 2015, mostly about web performance,
            JavaScript/TypeScript, React, and their ecosystem. Other topics also include programming languages design
            and iOS engineering.
          </Typography.p>
          <Typography.p>
            In total, {`I've`} presented <b>{talksTotal}</b> different sessions in <b>{eventsTotal}</b> events across{' '}
            <b>{citiesTotal}</b> cities in <b>{countriesTotal}</b> different countries.
          </Typography.p>
          <Typography.p>
            Want me to speak at your event? Please check my <Link href={`/${Routes.talksRider}`}>speaker rider</Link>{' '}
            and hit me up!
          </Typography.p>
          <Typography.p>
            I also maintain <Link href={`/${Routes.talksRadar}`}>here</Link> a curated list with the CFPs (ie. Calls for
            Papers/Presentations) of conferences I am personally interested in and a few others I happen to stumble
            across when navigating different event listings!
          </Typography.p>
        </SectionContainer>

        <Suspense fallback={<AllTalksSectionSkeleton items={5} />}>
          <AllTalksSection items={allTalks} searchTerm={searchTerm} />
        </Suspense>

        <UpcomingTalksSection items={upcomingSessions} />
        <ActiveTalksSection items={activeTalks} />
        <TopicHighlightsSection title="React Highlights" items={reactTalks} />
        <YoutubeHighlightsSection items={youtubeHighlights} />
        <PhotoHighlightsSection items={featuredTalks} />
      </Layout>
    </>
  );
};

export default Page;
