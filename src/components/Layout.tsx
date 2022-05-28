import * as React from 'react';
import { Global } from '@emotion/react';
import { Box, Container, get } from 'theme-ui';
import Header from './Header';
import Footer from './Footer';
import CodeStyles from 'src/styles/code';
import NProgress from 'next-nprogress-emotion';

type LayoutProps = { children: React.ReactNode; className?: string };

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(t) => ({
        '*': {
          boxSizing: `inherit`,
        },
        html: {
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
        },
        '[hidden]': {
          display: `none`,
        },
        '::selection': {
          backgroundColor: get(t, `colors.text`),
          color: get(t, `colors.background`),
        },
        a: {
          transition: `all 0.3s ease-in-out`,
          color: `text`,
        },
      })}
    />
    {/* TODO */}
    {/* <Seo /> */}
    <Container>
      {/* TODO */}
      <NProgress />
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

export default Layout;
