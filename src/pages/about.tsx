import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { AboutFrontMatter } from 'types/front-matter';

import { Layouts } from 'config/constants';

import { getFileBySlug } from 'utils/mdx';

import { MDXLayoutRenderer } from 'components/shared/mdx-components';

/*~
 * NEXTJS
 */

export const getStaticProps: GetStaticProps<{
  content: { mdxSource: string; frontMatter: AboutFrontMatter };
}> = async () => {
  const content = await getFileBySlug<AboutFrontMatter>('about', 'work');
  const { mdxSource, frontMatter } = content;
  return { props: { content: { mdxSource, frontMatter } } };
};

/*~
 * PAGE
 */

const AboutPage = ({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { mdxSource, frontMatter } = content;

  return (
    <MDXLayoutRenderer
      layout={Layouts.about}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  );
};

export default AboutPage;
