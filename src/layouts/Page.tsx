import { Heading } from 'theme-ui';

import Layout from 'src/components/Layout';

type PageProps = {
  data: {
    page: {
      title: string;
      slug: string;
      excerpt: string;
      body: string;
    };
  };
  [key: string]: any;
};

const Page = ({ data: { page } }: PageProps) => (
  <Layout>
    {/* TODO */}
    {/* <Seo title={page.title} description={page.excerpt} /> */}
    <Heading as="h1" variant="styles.h1">
      {page.title}
    </Heading>
    <section sx={{ my: 5, variant: `layout.content` }}>
      {/* TODO */}
      {/* <MDXRenderer>{page.body}</MDXRenderer> */}
    </section>
  </Layout>
);

export default Page;
