import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
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

import Layout from 'components/Layout';
import SessionListing from 'components/talks/SessionListing';

import { talkDocumentTransformer } from './talks.utils';

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
  const { title, abstract, sessions } = props;

  return (
    <Layout>
      <Themed.h2>{title}</Themed.h2>

      {documentToReactComponents(abstract)}

      <Themed.h3>Sessions</Themed.h3>
      <SessionListing items={sessions} />
    </Layout>
  );
};

export default TalkPage;
