import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import BlogHeader from '../components/BlogHeader'

require("prism-themes/themes/prism-ghcolors.css");

const Main = styled.main`
  padding: 0 1rem;
`

const blogHeaderLinks = {
  '/posts': <Link to="/">/posts</Link>,
  '/talks': <Link to="/">/talks</Link>,
}

const TemplateWrapper = ({children, location}) => (
  <Main>
    <Helmet
      title="ythecombinator's space"
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lato|Poppins:700i'
        }
      ]}
    />
    <BlogHeader>
      <h1>
        {blogHeaderLinks[location.pathname] 
          ? blogHeaderLinks[location.pathname]
          : <Link to={`/${location.pathname.split('/')[1]}`}>{location.pathname}</Link> }
      </h1>
    </BlogHeader>

    {children()}
  </Main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
