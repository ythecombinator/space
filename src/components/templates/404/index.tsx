import React from 'react';

import {css, Global} from '@emotion/core';
import {Link} from 'gatsby';
import {Styled as Style} from 'theme-ui';

import SEO from 'components/common/seo';

import {StyledGatsbyLink} from 'utils/theme-ui';

import animation from './assets/animation.webm';
import fallback from './assets/fallback.mp4';
import * as Styled from './styles';

const Error = () => {
  return (
    <Styled.Container>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
          }
        `}
      />
      <SEO title="Error" />
      <Styled.Content>
        <video autoPlay loop muted playsInline>
          <source src={animation} type="video/webm" />
          <source src={fallback} type="video/mp4" />
        </video>
        <Style.h3 style={{ color: "white" }}>
          Yikes! You shouldn't be here! 😬
        </Style.h3>
        <StyledGatsbyLink as={Link} to="/">
          Click here to safely go 🏠
        </StyledGatsbyLink>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Error;
