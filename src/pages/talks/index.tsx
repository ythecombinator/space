import siteMetadata from 'data/siteMetadata';
import {
  GetAllTalksDocument,
  GetAllTalksQuery,
  GetTalksStatsQuery,
  GetTalksStatsDocument,
  GetFeaturedTalksQuery,
  GetFeaturedTalksDocument,
  GetActiveTalksQuery,
  GetActiveTalksDocument,
} from 'graphql/schema';
import { InferGetStaticPropsType, NextPage } from 'next';
import { Suspense, useState } from 'react';
import { DeepNonNullable } from 'utility-types';

import ContentfulService from 'services/contentful';

import { toIndexableCollection } from 'utils/search';

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
 * UTILS
 */

const allTalksDocTransformer = (result: GetAllTalksQuery) => {
  const items = (result as DeepNonNullable<GetAllTalksQuery>).talkCollection
    .items;

  return items.map((item) => {
    const {
      title,
      shortDescription,
      slug,
      sessionsCollection,
      contentfulMetadata,
    } = item;

    return {
      talkTitle: title,
      talkSlug: slug,
      // Indexable search metadata
      _description: JSON.stringify(shortDescription.json),
      _events: toIndexableCollection(
        sessionsCollection.items.map((session) => session.event.name)
      ),
      _cities: toIndexableCollection(
        sessionsCollection.items.map((session) => session.event.city.name)
      ),
      _countries: toIndexableCollection(
        sessionsCollection.items.map(
          (session) => session.event.city.country.name
        )
      ),
      _tags: toIndexableCollection(
        contentfulMetadata.tags.map((tag) => tag.name)
      ),
    };
  });
};

const talksStatsDocTransformer = (result: GetTalksStatsQuery) => {
  const { countryCollection, cityCollection, eventCollection, talkCollection } =
    result as DeepNonNullable<GetTalksStatsQuery>;

  return {
    talksTotal: talkCollection.total,
    eventsTotal: eventCollection.total,
    citiesTotal: cityCollection.total,
    countriesTotal: countryCollection.total,
  };
};

const featuredTalksDocTransformer = (result: GetFeaturedTalksQuery) => {
  const items = (result as DeepNonNullable<GetFeaturedTalksQuery>)
    .sessionCollection?.items;

  return items.map((item) => ({
    eventName: item.event.name,
    photoURL: item.photo.url,
    talkTitle: item.talk.title,
    talkSlug: item.talk.slug,
  }));
};

const activeTalksDocTransformer = (result: GetActiveTalksQuery) => {
  const items = (result as DeepNonNullable<GetActiveTalksQuery>).talkCollection
    ?.items;

  return items.map((item) => ({
    talkTitle: item.title,
    talkSlug: item.slug,
    sessions: item.sessionsCollection.items.map((session) => ({
      eventName: session.event.name,
      eventPage: session.event.website,
      eventFlag: session.event.city.country.flag,
    })),
  }));
};

const getTalksStats = ContentfulService.query<GetTalksStatsQuery>({
  query: GetTalksStatsDocument,
});

const getFeaturedTalks = ContentfulService.query<GetFeaturedTalksQuery>({
  query: GetFeaturedTalksDocument,
});

const getActiveTalks = ContentfulService.query<GetFeaturedTalksQuery>({
  query: GetActiveTalksDocument,
});

const getAllTalks = ContentfulService.query<GetAllTalksQuery>({
  query: GetAllTalksDocument,
  variables: {
    limit: 0,
  },
});

/*~
 * NEXTJS
 */

export async function getStaticProps() {
  // Numbers
  const [talksStatsDoc, featuredTalksDoc, activeTalksDoc, allTalksDoc] =
    await Promise.all([
      getTalksStats,
      getFeaturedTalks,
      getActiveTalks,
      getAllTalks,
    ]);

  const talksStats = talksStatsDocTransformer(talksStatsDoc.data);
  const featuredTalks = featuredTalksDocTransformer(featuredTalksDoc.data);
  const activeTalks = activeTalksDocTransformer(activeTalksDoc.data);
  const allTalks = allTalksDocTransformer(allTalksDoc.data);

  // Final props
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
        heading="Talks"
        subHeading={
          <SeachBar
            label={`Search topics, events (e.g. "React Summit") and places (e.g. "Spain")`}
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
