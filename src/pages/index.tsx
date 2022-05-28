import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import MDXRenderer from 'components/MDXRenderer';
import Title from 'components/Title';
import { NavigationPath } from 'config/constants';
import HomepageLayout from 'layouts/Home';
import { getFileContents } from 'utils/mdx';
import { replaceSlashes } from 'utils/string';

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
