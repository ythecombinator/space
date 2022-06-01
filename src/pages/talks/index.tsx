import { GetAllTalksDocument, GetAllTalksQuery } from 'graphql/schema';
import { InferGetStaticPropsType, NextPage } from 'next';
import { Themed } from 'theme-ui';

import ContentfulService from 'services/contentful';

import Listing from 'components/Listing';
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
      <Themed.h3>All Talks</Themed.h3>
      <Listing path="talks/" items={items} />
    </Layout>
  );
};

export default TalksPage;
