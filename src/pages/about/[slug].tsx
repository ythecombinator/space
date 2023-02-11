import fs from 'fs';
import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { Layouts } from 'config/constants';

import AboutContentService from 'services/about-content-service';
import AboutsContentService from 'services/posts-content-service';

import { generateRSS } from 'utils/rss';

import MDXLayoutRenderer from 'components/shared/mdx-components';

/*~
 * TYPES
 */

interface Params extends ParsedUrlQuery {
  slug: string;
}

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * NEXTJS
 */

const aboutServiceInstance = AboutContentService.getInstance();

export async function getStaticPaths() {
  const paths = aboutServiceInstance.getAllSlugs();
  return {
    paths: paths.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext<Params>) {
  const slug = context.params?.slug!;
  const content = aboutServiceInstance.get(slug);
  return { props: { content } };
}

/*~
 * PAGE
 */

const AboutPage: NextPage<Props> = ({ content }) => {
  return <MDXLayoutRenderer layout={Layouts.about} content={content} />;
};

export default AboutPage;
