import React from 'react'
import styled from 'styled-components'
import {Markdown} from 'react-showdown';
import {data} from '../data/about';

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  h2 {
    color: #e75e30;
    font-family: 'Lato', sans-serif;
  }  
  h3 {
    color: #30bae7;
    font-family: 'Lato', sans-serif;
  }
  p {
    margin: 0;
    color: #333333;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2rem;
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
    a {
      color: #e7305e;
      text-decoration: none;
    }
  }
  ul {
    font-family: 'Lato', sans-serif;
    margin-top: 0.5rem;
    li {
      color: #333333;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 2rem;
      @media (min-width: 768px) {
        font-size: 1.1rem;
      }
      a {
        color: #e7305e;
        text-decoration: none;
      }
    }
  }
`

export default () => (
  <StyledAbout>
    <Markdown markup={data} />
  </StyledAbout>
)
