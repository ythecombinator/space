import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  margin-top: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #fb958b;
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    border-bottom: 4px solid #fb958b;
    display: inline-flex;
    @media (min-width: 768px) {
      font-size: 2.4rem;
    }
    a {
      transition: all .3s ease-in-out;
      color: #fb958b;
      text-decoration: none;
      padding: 0 8px;
      &:hover {
        color: white;
        background: #fb958b;
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
      color: #fb958b;
      &:not(:first-child) {
        &:before {
          color: #8bb9fb;
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
