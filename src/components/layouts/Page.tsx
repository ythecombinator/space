import { FC } from 'react';
import { Heading } from 'theme-ui';

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
      <Heading as="h1" variant="styles.h1">
        {title}
      </Heading>
      <section sx={{ my: 5, variant: `layout.content` }}>
        {/* TODO */}
        {/* <MDXRenderer>{page.body}</MDXRenderer> */}
      </section>
    </Layout>
  );
};

export default PageLayout;
