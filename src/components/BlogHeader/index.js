import React from 'react'
import styled from 'styled-components'

import {brightPink} from "../../styles/colors";

const StyledHeader = styled.div`
  text-align: left;
  margin-left: 1.4rem;
  margin-top: 1.4rem;
  h1 {
    color: ${brightPink};
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    border-bottom: 4px solid ${brightPink};
    display: inline-flex;
    &:hover {
      border-bottom: none;
    }
    a {
      transition: all .3s ease-in-out;
      padding: 0 4px;
      color: ${brightPink};
      text-decoration: none;
      &:hover {
        color: white;
        background: ${brightPink};
      }
    }
  }
`

const Header = ({ children }) => {
  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  )
}

export default Header
