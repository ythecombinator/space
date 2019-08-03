import React, {FunctionComponent, useEffect} from 'react';

import Helmet from 'react-helmet';

import Dots from 'components/Dots';
import GithubRibbon from 'components/GithubRibbon';

import {getRandomEmojiElement} from 'utils/emoji';

import favicon from 'assets/favicon.png';

import {StyledMain} from './styles';

const TemplateWrapper: FunctionComponent = props => {
  const { children } = props;

  useEffect(() => {
    document.addEventListener("mousemove", e => {
      const element = getRandomEmojiElement(e.pageX, e.pageY);

      document.body.appendChild(element);

      setTimeout(() => {
        document.body.removeChild(element);
      }, 100);
    });
  });

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

      <Dots number={50} />
      <GithubRibbon />

      {children}
    </StyledMain>
  );
};

export default TemplateWrapper;
