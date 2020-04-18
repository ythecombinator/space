import React, {FunctionComponent} from 'react';

import {Global} from '@emotion/core';
import {Container, css, Main, Styled} from 'theme-ui';
import 'typeface-ibm-plex-sans';

import SEO from 'components/common/seo';
import SkipNavLink from 'components/common/skip-nav';

import codeStyles from 'styles/code';

import Footer from '../footer';
import Header from '../header';

interface Props {
  className?: string;
}

const Layout: FunctionComponent<Props> = (props) => {
  const { children, className } = props;
  return (
    <Styled.root data-testid="theme-root">
      <Global
        styles={css({
          "*": {
            boxSizing: `inherit`,
          },
          body: {
            margin: 0,
            padding: 0,
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
          },
          "::selection": {
            backgroundColor: `primary`,
            color: `white`,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
            color: `text`,
          },
        })}
      />
      <SEO />
      <SkipNavLink>Skip to content</SkipNavLink>
      <Container>
        <Header />
        <Main
          id="skip-nav"
          css={css({ ...codeStyles } as any)}
          className={className}
        >
          {children}
        </Main>
        <Footer />
      </Container>
    </Styled.root>
  );
};

export default Layout;
