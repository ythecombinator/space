import { Document as ContentfulDocument } from '@contentful/rich-text-types';
import {
  GetAllTalksDocument,
  GetAllTalksQuery,
  GetUpcomingTalksDocument,
  GetUpcomingTalksQuery,
  ContentfulTag,
  GetTalksStatsQuery,
  GetTalksStatsDocument,
  GetFeaturedTalksQuery,
  GetFeaturedTalksDocument,
} from 'graphql/schema';
import { InferGetStaticPropsType, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Themed } from 'theme-ui';
import { DeepNonNullable } from 'utility-types';

import ContentfulService from 'services/contentful';

import Layout from 'components/shared/Layout';

import AllTalksList from 'components/pages/talks/AllTalksList';
import UpcomingTalksList from 'components/pages/talks/UpcomingTalksList';

const FeaturedTalksList = dynamic(
  () => import('components/pages/talks/FeaturedTalksList'),
  { ssr: false }
);

/*~
 * TYPES
 */

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * UTILS
 */

const tagTransformer = (tag: DeepNonNullable<ContentfulTag>) => {
  const { id, name } = tag;
  return { id, name };
};

const allTalksDocTransformer = (result: GetAllTalksQuery) => {
  const items = (result as DeepNonNullable<GetAllTalksQuery>).talkCollection
    .items;

  return items.map((item) => {
    const { title, slug, abstract, contentfulMetadata } = item;
    const headline = abstract.json.content[0] as ContentfulDocument;

    return {
      title,
      headline,
      slug,
      tags: contentfulMetadata.tags.map(tagTransformer),
    };
  });
};

const upcomingTalksDocTransformer = (result: GetUpcomingTalksQuery) => {
  const items = (result as DeepNonNullable<GetUpcomingTalksQuery>)
    .eventCollection.items;

  return items.map((item) => {
    const { name, city, sessionsCollection, startingDate, endingDate } = item;
    const { title, slug } = sessionsCollection.items[0].talk;

    return {
      talkTitle: title,
      talkSlug: slug,
      eventName: name,
      eventLocation: `${city.country.flag} ${city.name}, ${city.country.name}`,
      eventLocationImage: city.photo.url,
      eventDate: `${startingDate}`,
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
    talkTitle: item.talk.title,
    talkSlug: item.talk.slug,
    photo: item.photo.url,
  }));
};

const getTalksStats = ContentfulService.query<GetTalksStatsQuery>({
  query: GetTalksStatsDocument,
});

const getFeaturedTalks = ContentfulService.query<GetFeaturedTalksQuery>({
  query: GetFeaturedTalksDocument,
});

const getUpcomingTalks = ContentfulService.query<GetUpcomingTalksQuery>({
  query: GetUpcomingTalksDocument,
  variables: {
    eventStartingDate: new Date().toISOString(),
  },
});

const getAllTalks = ContentfulService.query<GetAllTalksQuery>({
  query: GetAllTalksDocument,
});

/*~
 * NEXTJS
 */

export async function getStaticProps() {
  // Numbers

  const [talksStatsDoc, featuredTalksDoc, upcomingTalksDoc, allTalksDoc] =
    await Promise.all([
      getTalksStats,
      getFeaturedTalks,
      getUpcomingTalks,
      getAllTalks,
    ]);

  const talksStats = talksStatsDocTransformer(talksStatsDoc.data);
  const featuredTalks = featuredTalksDocTransformer(featuredTalksDoc.data);
  const upcomingTalks = upcomingTalksDocTransformer(upcomingTalksDoc.data);
  const allTalks = allTalksDocTransformer(allTalksDoc.data);

  // Final props
  return {
    props: { talksStats, featuredTalks, upcomingTalks, allTalks },
    // revalidate: 86400,
  };
}

/*~
 * PAGE
 */

const TalksPage: NextPage<Props> = (props) => {
  const { talksStats, featuredTalks, upcomingTalks, allTalks } = props;
  const { citiesTotal, countriesTotal, talksTotal, eventsTotal } = talksStats;

  return (
    <Layout>
      <Themed.h2>Talks</Themed.h2>

      <Themed.p>
        I've been speaking and learning in public since 2015, mostly about web
        performance, JavaScript/TypeScript, React, and their ecosystem. Other
        topics also include programming languages design and iOS engineering.
      </Themed.p>

      <Themed.p>
        In total, I've presented <b>{talksTotal}</b> different sessions in{' '}
        <b>{eventsTotal}</b> events across <b>{citiesTotal}</b> cities in{' '}
        <b>{countriesTotal}</b> different countries.
      </Themed.p>

      {/* Featured */}
      <Themed.h3>Featured Talks</Themed.h3>
      <FeaturedTalksList items={featuredTalks} />

      {/* Upcoming */}
      <Themed.h3>Upcoming Talks</Themed.h3>
      <UpcomingTalksList items={upcomingTalks} />

      {/* All */}
      <Themed.h3>All Talks</Themed.h3>
      <AllTalksList items={allTalks} />
    </Layout>
  );
};

export default TalksPage;
