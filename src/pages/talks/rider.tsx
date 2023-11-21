import { InferGetStaticPropsType, NextPage } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { MDXRemote } from 'next-mdx-remote';
import { NextSeo as Metadata } from 'next-seo';
import { coreContent } from 'pliny/utils/contentlayer';

import { Layouts, siteMetadata } from 'config/constants';

import MarkdownContentService from 'services/content/markdown';

import { serializeExperience } from 'utils/linkedin';

import experience from 'content/misc/experience.json';

import MDXLayoutRenderer from 'components/shared/mdx-components';
import SectionContainer from 'components/shared/section-container';
import SectionCover from 'components/shared/section-cover';
import Typography from 'components/shared/typography';

import Layout from 'components/layouts/layout-page';

const metadata = {
  title: `Talks / Speaker Rider / ${siteMetadata.title}`,
  description: 'Me + Your Event',
};

/*~
 * TYPES
 */

export type SpeakerRiderPageProps = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * NEXTJS
 */

const markdownServiceInstance = MarkdownContentService.getInstance();

export async function getStaticProps() {
  const content = markdownServiceInstance.get('speaker-rider');

  if (!content) {
    return {
      notFound: true,
    };
  }

  return { props: { content } };
}

/*~
 * COMPONENTS
 */

/*~
 * PAGE
 */

const Page: NextPage<SpeakerRiderPageProps> = ({ content }) => {
  const MDXRenderer = useMDXComponent(content.body.code);
  const mdxContent = coreContent(content);

  return (
    <>
      <Metadata title={metadata.title} description={metadata.description} />
      <MDXLayoutRenderer layout={Layouts.biography} content={content} />
    </>
  );
};

export default Page;
