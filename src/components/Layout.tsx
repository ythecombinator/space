import { Global } from '@emotion/react';
import NProgress from 'next-nprogress-emotion';
import * as React from 'react';
import { FC } from 'react';
import { Box, Container, get } from 'theme-ui';

import Footer from 'components/Footer';
import Header from 'components/Header';

import CodeStyles from 'styles/code';

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
    <React.Fragment>
      <Global
        styles={(theme) => ({
          '*': {
            boxSizing: 'inherit',
          },
          html: {
            WebkitTextSizeAdjust: '100%',
          },
          img: {
            borderStyle: 'none',
          },
          pre: {
            fontFamily: 'monospace',
            fontSize: '1em',
          },
          '[hidden]': {
            display: 'none',
          },
          '::selection': {
            backgroundColor: get(theme, 'colors.text'),
            color: get(theme, 'colors.background'),
          },
          a: {
            ...get(theme, 'styles.a'),
          },
        })}
      />
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
    </React.Fragment>
  );
};

export default Layout;
