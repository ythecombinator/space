import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import Footer from "../components/Footer";

import BlogHeader from "../components/BlogHeader";
import GithubRibbon from "../components/GithubRibbon";

import favicon from "../assets/favicon.png";

import { colors } from "../styles/colors";

const { primary } = colors;

require("prism-themes/themes/prism-ghcolors.css");

const Main = styled.main`
  padding: 0 1rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  &:hover {
    color: white;
    background: ${primary};
  }
  img: {
    padding: 0 1rem 4px 0;
  }
`;

const blogHeaderLinks = {
  "/about": (
    <Logo>
      <Link to="/">🏠/about</Link>
    </Logo>
  ),
  "/posts": (
    <Logo>
      <Link to="/">🏠/posts</Link>
    </Logo>
  ),
  "/talks": (
    <Logo>
      <Link to="/">🏠/talks</Link>
    </Logo>
  )
};

const TemplateWrapper = ({ children, location }) => (
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
          rel: "shortcut icon",
          type: "image/png",
          href: favicon
        }
      ]}
    />

    <GithubRibbon />

    <BlogHeader>
      <h1>
        {blogHeaderLinks[location.pathname] ? (
          blogHeaderLinks[location.pathname]
        ) : (
          <Logo>
            <Link to={`/${location.pathname.split("/")[1]}`}>
              🏠{location.pathname}
            </Link>
          </Logo>
        )}
      </h1>
    </BlogHeader>

    {children()}

    <Footer>
      <p>Made with 💖 while high either on ☕ or 🍻 – or both 😂.</p>
    </Footer>
  </Main>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
