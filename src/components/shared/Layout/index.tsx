import { Global } from '@emotion/react';
import NProgress from 'next-nprogress-emotion';
import { FC, Fragment } from 'react';
import { Box, Container } from 'theme-ui';

import Footer from 'components/shared/Footer';
import Header from 'components/shared/Header';

import CodeStyles from 'styles/code';

import * as styles from './Layout.styles';

/*~
 * TYPES
 */

export type LayoutProps = { children: React.ReactNode; className?: string };

/*~
 * COMPONENT
 */

const Layout: FC<LayoutProps> = (props) => {
  const { children, className = '' } = props;

  return (
    <Fragment>
      <Global styles={styles.global} />
      {/* TODO */}
      {/* <Seo /> */}
      <Container>
        <NProgress
          color="accent"
          options={{ trickleSpeed: 50 }}
          showAfterMs={300}
          spinner
        />
        <Header />
        <Box
          id="skip-nav"
          as="main"
          variant="layout.main"
          sx={{ ...CodeStyles }}
          className={className}
        >
          {children}
        </Box>
        <Footer />
      </Container>
    </Fragment>
  );
};

export default Layout;
