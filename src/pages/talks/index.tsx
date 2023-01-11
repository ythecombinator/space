import {
  GetTalksDocument,
  GetTalksQuery,
  GetTalksStatsQuery,
  GetTalksStatsDocument,
  GetFeaturedTalksQuery,
  GetFeaturedTalksDocument,
  GetActiveTalksQuery,
  GetActiveTalksDocument,
} from 'graphql/schema';
import { InferGetStaticPropsType, NextPage } from 'next';
import { useState } from 'react';
import { DeepNonNullable } from 'utility-types';

import ContentfulService from 'services/contentful';

import Layout from 'components/layouts/TalksLayout';

import ActiveTalksList from 'components/pages/talks/ActiveTalksList';
import AllTalksList from 'components/pages/talks/AllTalksList';
import FeaturedTalksSection from 'components/pages/talks/FeaturedTalksSection';

/*~
 * TYPES
 */

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * UTILS
 */

const allTalksDocTransformer = (result: GetTalksQuery) => {
  const items = (result as DeepNonNullable<GetTalksQuery>).talkCollection.items;

  return items.map((item) => {
    const { title, slug } = item;

    return {
      talkTitle: title,
      talkSlug: slug,
      // tags: contentfulMetadata.tags.map(tagTransformer),
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
    // revalidate: 86400,
  };
}

/*~
 * PAGE
 */

const TalksPage: NextPage<Props> = (props) => {
  const { talksStats, featuredTalks, activeTalks, allTalks } = props;
  const { citiesTotal, countriesTotal, talksTotal, eventsTotal } = talksStats;

  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = allTalks.filter((frontMatter) => {
    const searchContent = frontMatter.talkTitle;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  const initialDisplayPosts = [];

  // console.log('activeTalks', activeTalks);

  // If initialDisplayPosts exist, display it if no searchValue is specified

  return (
    <>
      {/* <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} /> */}
      <Layout title="Talks">
        <FeaturedTalksSection items={featuredTalks} />
        <ActiveTalksList items={activeTalks} />
        <AllTalksList items={allTalks} />
      </Layout>
    </>
  );
};

export default TalksPage;
