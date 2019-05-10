import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";

import GithubRibbon from "../components/GithubRibbon";
import Dots from "../components/Dots";

import favicon from "../assets/favicon.png";

const Main = styled.main`
  @media (max-width: 768px) {
    body {
      font-size: 16px;
      line-height: 1.6;
    }

    ul,
    ol,
    p {
      margin: 1.35em 0;
    }
  }

  @media (max-width: 468px) {
    body {
      font-size: 15px;
      line-height: 1.6;
      color: #222;
    }

    a {
      color: #111;
    }

    ul,
    ol,
    p {
      margin: 1.25em 0;
    }
  }
`;

const TemplateWrapper = ({ children }) => (
  <Main>
    <Helmet
      title="ythecombinator's space"
      link={[
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Source+Code+Pro:600,700"
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,700"
        },

        {
          rel: "shortcut icon",
          type: "image/png",
          href: favicon
        }
      ]}
    />

    <Dots number={100} />
    <GithubRibbon />

    {children()}
  </Main>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
