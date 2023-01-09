import { Document as ContentfulDocument } from '@contentful/rich-text-types';
import Link from 'components/Link';
import {
  GetTalksDocument,
  GetTalksQuery,
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
import { useState } from 'react';
import { DeepNonNullable } from 'utility-types';

import ContentfulService from 'services/contentful';

import CardFeatured from 'components/shared/CardFeatured';

import Layout from 'components/layouts/TalksLayout';

import AllTalksList from 'components/pages/talks/AllTalksList';
import FeaturedTalksList from 'components/pages/talks/FeaturedTalksList';
import UpcomingTalksList from 'components/pages/talks/UpcomingTalksList';

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

const allTalksDocTransformer = (result: GetTalksQuery) => {
  const items = (result as DeepNonNullable<GetTalksQuery>).talkCollection.items;

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

const getAllTalks = ContentfulService.query<GetTalksQuery>({
  query: GetTalksDocument,
  variables: {
    limit: 0,
  },
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

  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = allTalks.filter((frontMatter) => {
    const searchContent =
      frontMatter.title + frontMatter.headline + frontMatter.tags.join(' ');
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  const initialDisplayPosts = [];

  console.log('allTalks', allTalks);

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue
      ? initialDisplayPosts
      : filteredBlogPosts;

  return (
    <>
      {/* <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} /> */}
      <Layout title="Talks">
        <FeaturedTalksList items={featuredTalks} />
        <AllTalksList items={allTalks} />
      </Layout>
    </>
  );
};

export default TalksPage;
