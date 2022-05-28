import * as React from 'react';
import { Global } from '@emotion/react';
import { Box, Container, get } from 'theme-ui';
import Header from './Header';
import Footer from './Footer';
import CodeStyles from 'styles/code';
import NProgress from 'next-nprogress-emotion';
import { FC } from 'react';

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
