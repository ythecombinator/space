import { Document as ContentfulDocument } from '@contentful/rich-text-types';
import {
  ContentfulTag,
  GetAllTalksDocument,
  GetAllTalksQuery,
} from 'graphql/schema';
import { InferGetStaticPropsType, NextPage } from 'next';
import { DeepNonNullable } from 'utility-types';

import { siteMetadata } from 'config/constants';

import ContentfulService from 'services/contentful';
import { getFileBySlug } from 'services/mdx';

import PageSEO from 'components/shared/seo-page';

import Layout from 'components/layouts/layout-page';

import OverviewSection from 'components/pages/home/overview-section';

/*~
 * TYPES
 */

export type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * UTILS
 */

const tagTransformer = (tag: DeepNonNullable<ContentfulTag>) => {
  const { id, name } = tag;
  return { id, name };
};

const latestTalksDocTransformer = (result: GetAllTalksQuery) => {
  const items = (result as DeepNonNullable<GetAllTalksQuery>).talkCollection
    .items;

  return items.map((item) => {
    const { title, slug, shortDescription, contentfulMetadata } = item;
    const headline = shortDescription.json.content[0] as ContentfulDocument;

    return {
      title,
      headline,
      slug,
      tags: contentfulMetadata.tags.map(tagTransformer),
    };
  });
};

const getLatestTalks = ContentfulService.query<GetAllTalksQuery>({
  query: GetAllTalksDocument,
  variables: {
    limit: 3,
  },
});

/*~
 * NEXTJS
 */

export async function getStaticProps() {
  const content = await getFileBySlug('about', 'work');

  const [overview, latestTalksDoc] = await Promise.all([
    getFileBySlug('about', 'work'),
    getLatestTalks,
  ]);

  const latestTalks = latestTalksDocTransformer(latestTalksDoc.data);

  return { props: { overview, latestTalks } };
}

/*~
 * PAGE
 */

const HomePage: NextPage<HomePageProps> = (props) => {
  const {} = props;

  return (
    <>
      <PageSEO
        title={`Talks by ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <Layout heading="Hi, I'm Matheus! 👋">
        <OverviewSection />
      </Layout>
    </>
  );
};

export default HomePage;
