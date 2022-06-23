import { Heading, Text, Box, VStack } from '@chakra-ui/react';
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
    const { title, slug, shortDescription, contentfulMetadata } = item;
    const headline = shortDescription.json.content[0] as ContentfulDocument;

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
      <Text
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="5xl"
        fontWeight="extrabold"
      >
        Confs. Meetups. Events.
      </Text>

      <VStack spacing="1rem">
        <Box>
          <Text fontSize="lg" mb="4">
            I've been speaking and learning in public since 2015, mostly about
            web performance, JavaScript/TypeScript, React, and their ecosystem.
            Other topics also include programming languages design and iOS
            engineering.
          </Text>
          <Text fontSize="lg" mb="4">
            In total, I've presented <b>{talksTotal}</b> different sessions in{' '}
            <b>{eventsTotal}</b> events across <b>{citiesTotal}</b> cities in{' '}
            <b>{countriesTotal}</b> different countries.
          </Text>
        </Box>

        {/* Featured */}
        <Box>
          <Heading marginBottom={'1rem'}>Featured Talks</Heading>
          <FeaturedTalksList items={featuredTalks} />
        </Box>

        {/* Upcoming */}
        <Box>
          <Heading marginBottom={'1rem'}>Upcoming Talks</Heading>
          <UpcomingTalksList items={upcomingTalks} />
        </Box>

        {/* All */}
        <Box>
          <Heading marginBottom={'1rem'}>All Talks</Heading>
          <AllTalksList items={allTalks} />
        </Box>
      </VStack>
    </Layout>
  );
};

export default TalksPage;
