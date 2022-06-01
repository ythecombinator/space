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
        I've been writing online since 2014, mostly about web development and
        tech careers. In total, I've written 63 articles on my blog. Use the
        search below to filter by title.
      </Themed.p>
      <Themed.h3>All Talks</Themed.h3>
      <Listing items={items} />
    </Layout>
  );
};

export default TalksPage;
