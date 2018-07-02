import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  text-align: left;
  margin-left: 1.4rem;
  margin-top: 1.4rem;
  h1 {
    color: #f7a583;
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    border-bottom: 4px solid #f7a583;
    display: inline-flex;
    a {
      transition: all .3s ease-in-out;
      padding: 0 4px;
      color: #f7a583;
      text-decoration: none;
      &:hover {
        color: white;
        background: #f7a583;
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
