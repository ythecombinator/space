import { InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';

import { NavigationPath } from 'config/constants';

import { getFileContents } from 'utils/mdx';
import { replaceSlashes } from 'utils/string';

import HomepageLayout from 'components/layouts/Home';

import Hero from 'components/pages/home/Hero';

/*~
 * TYPES
 */

export type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * NEXTJS
 */

export async function getStaticProps() {
  const heroContent = await getFileContents('hero');
  return { props: { heroContent } };
}

/*~
 * PAGE
 */

const HomePage: NextPage<HomePageProps> = (props) => {
  const { heroContent } = props;

  return (
    <HomepageLayout
      heroSection={<Hero contents={heroContent} />}
    ></HomepageLayout>
  );
};

export default HomePage;
