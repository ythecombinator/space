import {
  GetAllTalksDocument,
  GetAllTalksQuery,
  GetUpcomingTalksDocument,
  GetUpcomingTalksQuery,
} from 'graphql/schema';
import { InferGetStaticPropsType, NextPage } from 'next';
import { Themed } from 'theme-ui';

import ContentfulService from 'services/contentful';

import Listing from 'components/Listing';
import SessionsHero from 'components/pages/talks/SessionsHero';
import UpcomingTalks from 'components/pages/talks/UpcomingTalks';
import Layout from 'components/shared/Layout';

import {
  allTalksDocumentTransformer,
  upcomingTalksDocumentTransformer,
} from './utils';

/*~
 * TYPES
 */

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

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

  return {
    props: { upcomingTalks, allTalks },
    // revalidate: 86400,
  };
}

/*~
 * PAGE
 */

const heroSessions = [
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
      <SessionsHero items={heroSessions} />
      <Themed.h3>Upcoming Talks</Themed.h3>
      <UpcomingTalks items={upcomingTalks} />
      <Themed.h3>All Talks</Themed.h3>
      <Listing path="talks" items={allTalks} />
    </Layout>
  );
};

export default TalksPage;
