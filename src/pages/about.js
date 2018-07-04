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
    color: #958bfb;
    font-family: 'Lato', sans-serif;
  }  
  h3 {
    color: #8bb9fb;
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
      color: #fb958b;
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
        color: #fb958b;
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
