import React, {FunctionComponent} from 'react';

import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import BlogHeader from 'components/BlogHeader';
import Footer from 'components/Footer';
import GithubRibbon from 'components/GithubRibbon';

import {stripTrailingSlash} from 'utils/string';

import favicon from 'assets/favicon.png';

import {StyledLogo, StyledMain} from './styles';
import {blogHeaderLinks, HeaderLink} from './utils';

require("prism-themes/themes/prism-ghcolors.css");

interface Props {
  location: Location;
}

const TemplateWrapper: FunctionComponent<Props> = props => {
  const { children, location } = props;

  const currentPathname = stripTrailingSlash(location.pathname);
  const previousPathname = currentPathname.split("/")[1];

  return (
    <StyledMain>
      <Helmet
        title="ythecombinator's space"
        link={[
          {
            rel: "stylesheet",
            href:
              "https://fonts.googleapis.com/css?family=Source+Code+Pro:600,700"
          },
          {
            rel: "shortcut icon",
            type: "image/png",
            href: favicon
          }
        ]}
      />

      <GithubRibbon />

      <BlogHeader>
        <h1>
          {blogHeaderLinks[currentPathname as HeaderLink] ? (
            blogHeaderLinks[currentPathname as HeaderLink]
          ) : (
            <StyledLogo>
              <Link to={`/${previousPathname}`}>🏠{currentPathname}</Link>
            </StyledLogo>
          )}
        </h1>
      </BlogHeader>

      {children}

      <Footer>
        <p>Made with 💖 while high either on ☕ or 🍻 – or both 😂.</p>
      </Footer>
    </StyledMain>
  );
};

export default TemplateWrapper;
