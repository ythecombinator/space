import Layout from 'src/components/Layout';
import Title from 'src/components/Title';
import { MDXRemote } from 'next-mdx-remote';

import { visuallyHidden } from 'src/styles/utils';
import Link from 'next/link';
import { replaceSlashes } from 'src/utils/string';
import { basePath, blogPath, siteTitle } from 'src/utils/config';
import Listing from 'src/components/Listing';
import List from 'src/components/List';
import { defaults } from 'src/utils/mdx';

// // @ts-ignore
// import Hero from 'src/content/hero.mdx';
// // @ts-ignore
// import Bottom from 'src/content/bottom.mdx';

type PostsProps = {
  hero: string;
  posts?: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags?: {
      name: string;
      slug: string;
    }[];
  }[];
  [key: string]: any;
};

const Homepage = (props: PostsProps) => {
  const { hero } = props;
  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section
        sx={{
          mb: [5, 6, 7],
          p: { fontSize: [1, 2, 3], mt: 2 },
          variant: `section_hero`,
        }}
      >
        {/* <Hero /> */}
        <MDXRemote {...hero} components={defaults} />
      </section>
      <Title text="Latest Posts">
        <Link href={replaceSlashes(`/${basePath}/${blogPath}`)}>
          Read all posts
        </Link>
      </Title>
      {/* <Listing posts={posts} showTags={false} /> */}
      <List>{/* <Bottom /> */}</List>
    </Layout>
  );
};

export default Homepage;
