import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { Layouts } from 'config/constants';

import BiographyContentService from 'services/biography-content-service';

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

const biographyServiceInstance = BiographyContentService.getInstance();

export async function getStaticPaths() {
  const paths = biographyServiceInstance.getAllSlugs();
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
  const content = biographyServiceInstance.get(slug);

  if (!content) {
    return {
      notFound: true,
    };
  }

  return { props: { content } };
}

/*~
 * PAGE
 */

const AboutPage: NextPage<Props> = ({ content }) => {
  return <MDXLayoutRenderer layout={Layouts.biography} content={content} />;
};

export default AboutPage;
