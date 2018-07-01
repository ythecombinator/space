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
      title='Superstylin | A Gatsby Starter with Style 🕶️'
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lato|Poppins:700i'
        }
      ]}
    />
    <Header>
      <h1><Link to='/'>Superstylin'</Link></h1>
      <h2>A <span>Gatsby Starter</span> with <span>Style</span> <i>🕶️</i></h2>
    </Header>

    {children()}

    <Footer>
      <p>Made by <a href='https://twitter.com/bntzio' target='_blank'>@bntzio</a> with ❤️</p>
    </Footer>
  </Main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
