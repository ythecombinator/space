import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  margin-top: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #e7305e;
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    border-bottom: 4px solid #e7305e;
    display: inline-flex;
    @media (min-width: 768px) {
      font-size: 2.4rem;
    }
    a {
      transition: all .3s ease-in-out;
      color: #e7305e;
      text-decoration: none;
      padding: 0 8px;
      &:hover {
        color: white;
        background: #e7305e;
      }
    }
  }
  h2 {
    position: relative;
    margin: 0;
    margin-left: -1.6rem;
    margin-top: -0.8rem;
    color: #1a1a1a;
    max-width: 60%;
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    @media (min-width: 768px) {
      font-size: 1rem;
    }
    span {
      color: #e7305e;
      &:not(:first-child) {
        &:before {
          color: #30bae7;
          content: " • ";
        }
      }
    }
    i {
      position: absolute;
      font-size: 1.4rem;
      margin-top: -4px;
      margin-left: 4px;
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
