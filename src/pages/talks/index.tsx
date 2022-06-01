import {
  GetAllTalksDocument,
  GetAllTalksQuery,
  GetUpcomingTalksDocument,
  GetUpcomingTalksQuery,
  ContentfulTag,
} from 'graphql/schema';
import { InferGetStaticPropsType, NextPage } from 'next';
import { Themed } from 'theme-ui';
import { DeepNonNullable } from 'utility-types';

import ContentfulService from 'services/contentful';

import Layout from 'components/shared/Layout';

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

const allTalksDocumentTransformer = (result: GetAllTalksQuery) => {
  const items = (result as DeepNonNullable<GetAllTalksQuery>).talkCollection
    .items;

  return items.map((item) => {
    const { title, slug, contentfulMetadata } = item;
    return {
      title,
      headline:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      slug,
      tags: contentfulMetadata.tags.map(tagTransformer),
    };
  });
};

const upcomingTalksDocumentTransformer = (result: GetUpcomingTalksQuery) => {
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

/*~
 * NEXTJS
 */

export async function getStaticProps() {
  // "Upcoming Talks" section
  const upcomingTalksDocument =
    await ContentfulService.query<GetUpcomingTalksQuery>({
      query: GetUpcomingTalksDocument,
      variables: {
        eventStartingDate: new Date().toISOString(),
      },
    });

  const upcomingTalks = upcomingTalksDocumentTransformer(
    upcomingTalksDocument.data
  );

  // "All Talks" section
  const allTalksDocument = await ContentfulService.query<GetAllTalksQuery>({
    query: GetAllTalksDocument,
  });

  const allTalks = allTalksDocumentTransformer(allTalksDocument.data);

  // Final props
  return {
    props: { upcomingTalks, allTalks },
    // revalidate: 86400,
  };
}

/*~
 * PAGE
 */

const featuredTalks = [
  { eventName: 'Opa', talkSlug: 'Opa', key: 'osdfuijsjdi' },
  { eventName: 'Opa', talkSlug: 'Opa', key: 'sdasd' },
  { eventName: 'Opa', talkSlug: 'Opa', key: 'sssdsd' },
  { eventName: 'Opa', talkSlug: 'Opa', key: 'dds' },
  { eventName: 'Opa', talkSlug: 'Opa', key: 'sdadssd' },
  { eventName: 'Opa', talkSlug: 'Opa', key: 'sssssfsddsd' },
];

const TalksPage: NextPage<Props> = (props) => {
  const { upcomingTalks, allTalks } = props;

  return (
    <Layout>
      <Themed.h2>Talks</Themed.h2>
      <Themed.p>
        I've been speaking and learning in public since 2015, mostly about web
        performance, JavaScript/TypeScript, React, and their ecosystem. Other
        topics also include programming languages and iOS engineering. In total,
        I've given x sessions in y events in z cities.
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
