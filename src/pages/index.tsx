import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import MDXRenderer from 'src/components/MDXRenderer';
import Title from 'src/components/Title';
import { NavigationPath } from 'src/config/constants';
import HomepageLayout from 'src/layouts/Home';
import { getFileContents } from 'src/utils/mdx';
import { replaceSlashes } from 'src/utils/string';

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
