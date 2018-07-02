import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  text-align: left;
  margin-left: 1.4rem;
  margin-top: 1.4rem;
  h1 {
    color: #fb958b;
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    border-bottom: 4px solid #fb958b;
    display: inline-flex;
    a {
      transition: all .3s ease-in-out;
      padding: 0 4px;
      color: #fb958b;
      text-decoration: none;
      &:hover {
        color: white;
        background: #fb958b;
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
