import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  text-align: left;
  margin-left: 1.4rem;
  margin-top: 1.4rem;
  h1 {
    color: #e7305e;
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    border-bottom: 4px solid #e7305e;
    display: inline-flex;
    &:hover {
      border-bottom: none;
    }
    a {
      transition: all .3s ease-in-out;
      padding: 0 4px;
      color: #e7305e;
      text-decoration: none;
      &:hover {
        color: white;
        background: #e7305e;
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
