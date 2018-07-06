import React from 'react'
import {Fragment} from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import BlogHeader from '../components/BlogHeader'
import GithubRibbon from '../components/GithubRibbon'

import logo from '../assets/logo.png'
import favicon from '../assets/favicon.png'

import {brightPink} from "../styles/colors";

require("prism-themes/themes/prism-ghcolors.css");

const Main = styled.main`
  padding: 0 1rem;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  &:hover {
    color: white;
    background: ${brightPink};
  }
  img: {
    padding: 0 1rem 4px 0;
  }
`

const blogHeaderLinks = {
  '/posts': (
    <Logo>
      <img src={logo} height={30} />
      <Link to="/">/posts</Link>
    </Logo>
  ),
  '/talks': (
    <Logo>
      <img src={logo} height={30} />
      <Link to="/">/talks</Link>
    </Logo>
  ),
}

const TemplateWrapper = ({children, location}) => (
  <Main>
    <Helmet
      title="ythecombinator's space"
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lato|Poppins:700i'
        },
        {
          rel: "shortcut icon", 
          type: "image/png",
          href: favicon,
        }        
      ]}
    />

    <GithubRibbon/>

    <BlogHeader>
      <h1>
        {blogHeaderLinks[location.pathname] 
          ? blogHeaderLinks[location.pathname]
          : (
            <Logo>
              <img src={logo} height={30} />
              <Link to={`/${location.pathname.split('/')[1]}`}>{location.pathname}</Link>
            </Logo>
          )}
      </h1>
    </BlogHeader>

    {children()}
  </Main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
