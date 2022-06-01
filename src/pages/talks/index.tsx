import { GetAllTalksDocument, GetAllTalksQuery } from 'graphql/schema';
import { InferGetStaticPropsType, NextPage } from 'next';
import { Themed } from 'theme-ui';

import ContentfulService from 'services/contentful';

import Listing from 'components/Listing';
import SessionsHero from 'components/pages/talks/SessionsHero';
import UpcomingSessions from 'components/pages/talks/UpcomingSessions';
import Layout from 'components/shared/Layout';

import { talksDocumentTransformer } from './utils';

/*~
 * TYPES
 */

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * NEXTJS
 */

export async function getStaticProps() {
  const { data: talksDocument } =
    await ContentfulService.query<GetAllTalksQuery>({
      query: GetAllTalksDocument,
    });

  const items = talksDocumentTransformer(talksDocument);

  return {
    props: { items },
    revalidate: 86400,
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

const upcomingSessions = [
  {
    eventName: 'Opa',
    id: 'osdfuijsjdi',
    eventStartingDate: 'sdsad',
    eventEndingDate: 'DDSDAS',
    locationName: 'fdsd',
    locationPhoto: 'fdsd',
  },
  {
    eventName: 'Opa',
    id: 'sdasd',
    eventStartingDate: 'sdsad',
    eventEndingDate: 'DDSDAS',
    locationName: 'fdsd',
    locationPhoto: 'fdsd',
  },
  {
    eventName: 'Opa',
    id: 'sssdsd',
    eventStartingDate: 'sdsad',
    eventEndingDate: 'DDSDAS',
    locationName: 'fdsd',
    locationPhoto: 'fdsd',
  },
];

const TalksPage: NextPage<Props> = (props) => {
  const { items } = props;

  console.log('items', items);

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
      <UpcomingSessions items={upcomingSessions} />
      <Themed.h3>All Talks</Themed.h3>
      <Listing path="talks/" items={items} />
    </Layout>
  );
};

export default TalksPage;
