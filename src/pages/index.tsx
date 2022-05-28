import { readFileSync } from 'fs';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { resolve } from 'path';
import HomepageLayout from 'src/layouts/Home';

/*~
 * TYPES
 */

type Props = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * NEXTJS
 */

export const getStaticProps: GetStaticProps = async () => {
  const postFilePath = resolve('src/content/hero.mdx');
  const fileContents = readFileSync(postFilePath).toString();
  console.log('fileContents', fileContents);

  const mdxSource = await serialize(fileContents.toString());

  return { props: { source: mdxSource } };
};

/*~
 * PAGE
 */

const HomePage: NextPage<Props> = (props) => {
  const { source } = props;
  console.log('source', source);

  return <HomepageLayout hero={source} />;
};

export default HomePage;
