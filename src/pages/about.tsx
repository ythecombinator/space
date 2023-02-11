import { InferGetStaticPropsType, NextPage } from 'next';

import { Layouts } from 'config/constants';

import AboutContentService from 'services/about-content-service';

import MDXLayoutRenderer from 'components/shared/mdx-components';

const aboutServiceInstance = AboutContentService.getInstance();

/*~
 * TYPES
 */

export type Props = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * NEXTJS
 */

export const getStaticProps = async () => {
  const content = await aboutServiceInstance.get('work');
  return { props: { content } };
};

/*~
 * PAGE
 */

const AboutPage: NextPage<Props> = ({ content }) => {
  return <MDXLayoutRenderer layout={Layouts.about} content={content} />;
};

export default AboutPage;
