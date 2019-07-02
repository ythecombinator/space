import React, {FunctionComponent} from 'react';

import Helmet from 'react-helmet';

import Dots from 'components/Dots';
import GithubRibbon from 'components/GithubRibbon';

import favicon from 'assets/favicon.png';

import {StyledMain} from './styles';

const TemplateWrapper: FunctionComponent = props => {
  const { children } = props;
  return (
    <StyledMain>
      <Helmet
        title="ythecombinator's space"
        link={[
          {
            rel: "shortcut icon",
            type: "image/png",
            href: favicon
          }
        ]}
      />

      <Dots number={100} />
      <GithubRibbon />

      {children}
    </StyledMain>
  );
};

export default TemplateWrapper;
