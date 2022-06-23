import { Heading } from '@chakra-ui/react';
import { FC } from 'react';

import Layout from 'components/shared/Layout';

/*~
 * TYPES
 */

export type PageLayoutProps = {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
};

/*~
 * COMPONENT
 */

const PageLayout: FC<PageLayoutProps> = (props) => {
  const { title } = props;

  return (
    <Layout>
      {/* TODO */}
      {/* <Seo title={page.title} description={page.excerpt} /> */}
      <Heading>{title}</Heading>
      <section sx={{ my: 5, variant: `layout.content` }}>
        {/* TODO */}
        {/* <MDXRenderer>{page.body}</MDXRenderer> */}
      </section>
    </Layout>
  );
};

export default PageLayout;
