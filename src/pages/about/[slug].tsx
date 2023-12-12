import { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo as Metadata } from 'next-seo';
import { ParsedUrlQuery } from 'querystring';

import { Layouts, siteMetadata } from 'config/constants';

import MarkdownContentService from 'services/content/markdown';

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

const markdownServiceInstance = MarkdownContentService.getInstance();

export async function getStaticPaths() {
  const paths = markdownServiceInstance
    .getAllSlugs()
    // Those are present under the /pages/about/ directory.
    .filter((slug) => slug !== 'experience');

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
  const content = markdownServiceInstance.get(slug);

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
  return (
    <>
      <Metadata
        title={`About — ${siteMetadata.title}`}
        openGraph={{
          type: 'profile',
          profile: {
            firstName: siteMetadata.authorFirstName,
            lastName: siteMetadata.authorLastName,
            username: siteMetadata.twitterHandle,
          },
          images: [
            {
              url: siteMetadata.avatar,
              width: 400,
              height: 400,
            },
          ],
        }}
      />
      <MDXLayoutRenderer layout={Layouts.mdx} content={content} />
    </>
  );
};

export default AboutPage;
