/** @jsx jsx */
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {jsx, Styled} from 'theme-ui';

import Layout from 'components/common/layout';
import SEO from 'components/common/seo';

import * as styles from './styles';

interface Props {
  data: {
    page: {
      title: string;
      slug: string;
      excerpt: string;
      body: string;
    };
  };
}

const Page = ({ data: { page } }: Props) => (
  <Layout>
    <SEO title={page.title} description={page.excerpt} />
    <Styled.h2>{page.title}</Styled.h2>
    <section sx={styles.section}>
      <MDXRenderer>{page.body}</MDXRenderer>
    </section>
  </Layout>
);

export default Page;
