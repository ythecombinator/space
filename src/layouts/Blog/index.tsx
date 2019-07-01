import React, {FunctionComponent} from 'react';

import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import BlogHeader from 'components/BlogHeader';
import Footer from 'components/Footer';
import GithubRibbon from 'components/GithubRibbon';

import favicon from 'assets/favicon.png';

import {StyledLogo, StyledMain} from './styles';
import {blogHeaderLinks, HeaderLink} from './utils';

require("prism-themes/themes/prism-ghcolors.css");

interface Props {
  location: Location;
}

const TemplateWrapper: FunctionComponent<Props> = props => {
  const { children, location } = props;

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
          {blogHeaderLinks[location.pathname as HeaderLink] ? (
            blogHeaderLinks[location.pathname as HeaderLink]
          ) : (
            <StyledLogo>
              <Link to={`/${location.pathname.split("/")[1]}`}>
                🏠{location.pathname}
              </Link>
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
