import { FC } from 'react';

import { siteTitle } from 'config/constants';

import Layout from 'components/shared/Layout';

import { visuallyHidden } from 'styles/utils';

/*~
 * TYPES
 */

export type HomeLayoutProps = {
  heroSection: JSX.Element;
};

/*~
 * COMPONENT
 */

const HomeLayout: FC<HomeLayoutProps> = (props) => {
  const { children, heroSection } = props;

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
        {heroSection}
      </section>
      {children}
    </Layout>
  );
};

export default HomeLayout;
