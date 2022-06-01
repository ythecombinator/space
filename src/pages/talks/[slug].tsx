import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
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
import { Themed } from 'theme-ui';
import { DeepNonNullable } from 'utility-types';

import ContentfulService from 'services/contentful';

import { format } from 'utils/date';

import Layout from 'components/shared/Layout';

import EventsList from 'components/pages/talks/EventsList';

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
  `${city.country?.flag} ${city.name}, ${city.country?.name}`;

const sessionTransformer = (session: DeepNonNullable<Session>) => ({
  id: session.sys.id,
  eventName: session.event?.name,
  eventLocation: locationTransformer(session.event?.city),
  eventStartingDate: format(session.event?.startingDate),
  eventEndingDate: format(session.event?.endingDate),
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
    abstract: talk?.abstract?.json,
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

  return (
    <Layout>
      <Themed.h2>{title}</Themed.h2>

      {documentToReactComponents(abstract)}

      <Themed.h3>Sessions</Themed.h3>
      <EventsList items={sessions} />
    </Layout>
  );
};

export default TalkPage;
