import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { AuthorFrontMatter } from 'types/AuthorFrontMatter';

import { Layouts } from 'config/constants';

import { getFileBySlug } from 'utils/mdx';

import { MDXLayoutRenderer } from 'components/shared/mdx-components';

/*~
 * NEXTJS
 */

// @ts-ignore
export const getStaticProps: GetStaticProps<{
  authorDetails: { mdxSource: string; frontMatter: AuthorFrontMatter };
}> = async () => {
  const authorDetails = await getFileBySlug<AuthorFrontMatter>('authors', [
    'default',
  ]);
  const { mdxSource, frontMatter } = authorDetails;
  return { props: { authorDetails: { mdxSource, frontMatter } } };
};

/*~
 * PAGE
 */

const AboutPage = ({
  authorDetails,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { mdxSource, frontMatter } = authorDetails;

  return (
    <MDXLayoutRenderer
      layout={Layouts.about}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  );
};

export default AboutPage;
