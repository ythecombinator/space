import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Document as ContentfulDocument } from '@contentful/rich-text-types';
import siteMetadata from 'data/siteMetadata';
import {
  GetAllTalkSlugsDocument,
  GetAllTalkSlugsQuery,
  GetTalkDocument,
  GetTalkQuery,
  City,
  Session,
} from 'graphql/schema';
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { DeepNonNullable } from 'utility-types';

import ContentfulService from 'services/contentful';

import { formatDate } from 'utils/date';

import { PageSEO } from 'components/shared/SEO';

import Layout from 'components/layouts/layout-page';

import EventsSection from 'components/pages/talk/events-section';
import OverviewSection from 'components/pages/talk/overview-section';

/*~
 * TYPES
 */

interface Params extends ParsedUrlQuery {
  slug: string;
}

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * UTILS
 */

const locationTransformer = (city: City) =>
  `${city.name}, ${city.country?.name} ${city.country?.flag} `;

const sessionTransformer = (session: DeepNonNullable<Session>) => ({
  id: session.sys.id,
  eventName: session.event?.name,
  eventLocation: locationTransformer(session.event?.city),
  eventStartingDate: formatDate(session.event?.startingDate),
  eventEndingDate: formatDate(session.event?.endingDate),
  sessionAudience: formatAudience(session.audience),
  sessionLanguage: formatLanguage(session.language),
  sessionOnline: session.online,
  sessionSlides: session.slides,
  sessionRecording: session.recording,
});

export const talkDocumentTransformer = (result: GetTalkQuery) => {
  const talk = result.talkCollection?.items[0];
  const sessions = talk?.sessionsCollection?.items as Array<
    DeepNonNullable<Session>
  >;

  return {
    title: talk?.title,
    abstract: talk?.abstract?.json as ContentfulDocument,
    sessions: sessions.map(sessionTransformer),
  };
};

export const formatAudience = (data: Session['audience']) =>
  data ? `Est. ${data} people audience` : 'No audience data';

export const formatLanguage = (data: Session['language']) =>
  `Presented in ${data?.language}`;

/*~
 * NEXTJS
 */

export async function getStaticPaths() {
  const { data: talkSlugsDocument } =
    await ContentfulService.query<GetAllTalkSlugsQuery>({
      query: GetAllTalkSlugsDocument,
    });

  return {
    paths: talkSlugsDocument.talkCollection?.items.map((item) => ({
      params: { slug: item?.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext<Params>) {
  const { data: talkBySlugDocument } =
    await ContentfulService.query<GetTalkQuery>({
      query: GetTalkDocument,
      variables: {
        slug: context.params?.slug,
      },
    });

  const talkData = talkDocumentTransformer(talkBySlugDocument);

  return {
    props: { ...talkData },
    // revalidate: 86400,
  };
}

/*~
 * PAGE
 */

const TalkPage: NextPage<Props> = (props) => {
  const { title, abstract, sessions } = props;
  console.log('sessions', sessions);

  return (
    <>
      <PageSEO
        title={`${title} by ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <Layout heading={title!}>
        <OverviewSection abstract={abstract} />
        <EventsSection items={sessions} />
      </Layout>
    </>
  );
};

export default TalkPage;
