import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Main = styled.main`
  padding: 0 1rem;
`

const TemplateWrapper = ({ children }) => (
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
    <Header>
      <h1><Link to='/'>ythecombinator's space</Link></h1>
      <h2>
        <span>full-stack engineer focused on client-side architecture</span>
        <span> into Swift and node.js</span>
        <span> indie, folk, synthwave, Brazilian funk listener</span>
        <span> craft brewing enthusiastic</span>
        <span> addicted to emojis and memes 🔝👌😂</span>
      </h2>
    </Header>

    {children()}

    <Footer>
      <p>Made with ❤️ while high on ☕ or 🍻 – or both 😂.</p>
    </Footer>
  </Main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
