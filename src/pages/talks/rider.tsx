import { InferGetStaticPropsType, NextPage } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo as Metadata } from 'next-seo';
import { coreContent } from 'pliny/utils/contentlayer';

import { Layouts, siteMetadata } from 'config/constants';

import MarkdownContentService from 'services/content/markdown';

import MDXLayoutRenderer from 'components/shared/mdx-components';

const metadata = {
  title: `Speaker Rider — ${siteMetadata.title}`,
  description: 'Your Event & I!',
};

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type SpeakerRiderPageProps = InferGetStaticPropsType<typeof getStaticProps>;

//  ---------------------------------------------------------------------------
//  NEXT
//  ---------------------------------------------------------------------------

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

const Page: NextPage<SpeakerRiderPageProps> = ({ content }) => {
  const MDXRenderer = useMDXComponent(content.body.code);
  const mdxContent = coreContent(content);

  return (
    <>
      <Metadata title={metadata.title} description={metadata.description} />
      <MDXLayoutRenderer layout={Layouts.mdx} content={content} />
    </>
  );
};

export default Page;
