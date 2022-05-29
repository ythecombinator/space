import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import {
  TalkBySlugDocument,
  TalkBySlugQuery,
  TalkSlugsDocument,
  TalkSlugsQuery,
} from 'schema';
import { Themed } from 'theme-ui';

import ContentfulService from 'services/contentful';

import Card from 'components/Card';
import CardBody from 'components/CardBody';
import CardHeader from 'components/CardHeader';
import CardLink from 'components/CardLink';
import CardList from 'components/CardList';
import Layout from 'components/Layout';

import { talkDocumentTransformer } from './utils';

/*~
 * TYPES
 */

interface Params extends ParsedUrlQuery {
  slug: string;
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * NEXTJS
 */

export async function getStaticPaths() {
  const { data: talkSlugsDocument } =
    await ContentfulService.query<TalkSlugsQuery>({
      query: TalkSlugsDocument,
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
    await ContentfulService.query<TalkBySlugQuery>({
      query: TalkBySlugDocument,
      variables: {
        slug: context.params?.slug,
      },
    });

  const talkData = talkDocumentTransformer(talkBySlugDocument);

  return {
    props: { ...talkData },
    revalidate: 86400,
  };
}

/*~
 * PAGE
 */

const TalkPage: NextPage<Props> = (props) => {
  const { title, sessions } = props;

  return (
    <Layout>
      <Themed.h2>{title}</Themed.h2>
      <CardList>
        {sessions.map((session) => {
          const {
            id,
            eventName,
            eventStartingDate,
            location,
            recording,
            slides,
            audience,
          } = session;

          return (
            <Card key={id}>
              <CardHeader backgroundImage={location.photo!}>
                {location.name}
              </CardHeader>
              <CardBody
                title={eventName!}
                subtitle={eventStartingDate}
                contents={
                  <div>
                    <p>👥 ~{audience} people watching</p>
                  </div>
                }
              >
                {slides && (
                  <CardLink href={slides}>
                    🖥️ View the presentation deck
                  </CardLink>
                )}
                {recording && (
                  <CardLink href={recording}>
                    📺 Watch the video recording
                  </CardLink>
                )}
              </CardBody>
            </Card>
          );
        })}
      </CardList>
    </Layout>
  );
};

export default TalkPage;
