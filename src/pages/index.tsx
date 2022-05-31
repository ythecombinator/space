import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';

import { NavigationPath } from 'config/constants';

import { getFileContents } from 'utils/mdx';
import { replaceSlashes } from 'utils/string';

import HomepageLayout from 'components/layouts/Home';

import MDXRenderer from 'components/MDXRenderer';
import Title from 'components/Title';

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
    <HomepageLayout heroSection={<MDXRenderer {...heroContent} />}>
      <Title text="Latest Posts">
        <Link
          href={replaceSlashes(
            `/${NavigationPath.base}/${NavigationPath.posts}`
          )}
        >
          Read all posts
        </Link>
      </Title>
      {/* <Listing posts={posts} showTags={false} /> */}
    </HomepageLayout>
  );
};

export default HomePage;
