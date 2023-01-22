import { Document as ContentfulDocument } from '@contentful/rich-text-types';
import { ContentfulTag, GetTalksDocument, GetTalksQuery } from 'graphql/schema';
import { InferGetStaticPropsType, NextPage } from 'next';
import { DeepNonNullable } from 'utility-types';

import ContentfulService from 'services/contentful';
import { getFileContents } from 'services/mdx';

import HomepageLayout from 'components/layouts/Home';

import Hero from 'components/pages/home/Hero';
import TalksSection from 'components/pages/home/TalksSection';

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

const latestTalksDocTransformer = (result: GetTalksQuery) => {
  const items = (result as DeepNonNullable<GetTalksQuery>).talkCollection.items;

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

const getLatestTalks = ContentfulService.query<GetTalksQuery>({
  query: GetTalksDocument,
  variables: {
    limit: 3,
  },
});

/*~
 * NEXTJS
 */

export async function getStaticProps() {
  const [heroContents, latestTalksDoc] = await Promise.all([
    getFileContents('hero'),
    getLatestTalks,
  ]);

  const latestTalks = latestTalksDocTransformer(latestTalksDoc.data);

  return { props: { heroContents, latestTalks } };
}

/*~
 * PAGE
 */

const HomePage: NextPage<HomePageProps> = (props) => {
  const { heroContents, latestTalks } = props;

  return (
    <HomepageLayout heroSection={<Hero contents={heroContents} />}>
      <TalksSection talks={latestTalks} />
    </HomepageLayout>
  );
};

export default HomePage;
