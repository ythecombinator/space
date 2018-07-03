import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const StyledPost = styled.div`
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;

  h1 {
    color: #1a1a1a;
    font-family: 'Poppin', sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 1.6rem;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
  p#date {
    font-family: 'Poppin', sans-serif;
    color: #737373;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 400;
  }
  .postBody {
    font-family: 'Lato', sans-serif;
    display: block;
    margin: 0 auto;
    width: 100%;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: #414141;
    @media (min-width: 768px) {
      width: 60%;
    }
    a {
      color: #8bb9fb;
      transition: all .3s ease-in-out;
      text-decoration: none;
      &:hover {
        color: white;
        background: #8bb9fb;
      }
    }
    img {
      max-width: 100%;
    }
    pre {
      overflow-x: scroll;
    }
    blockquote {
      border-left: 5px solid #ccc;  
      margin: 1.5em 10px;
      padding: 0.5em 10px;        
    }
  }
`

const Post = ({ postData }) => {
  const { html, frontmatter } = postData
  const m = moment(frontmatter.date, 'YYYY MM DD')
  return (
    <StyledPost>
      <h1>{frontmatter.title}</h1>
      <p id='date'>Published on { m.format('MMM Do YYYY') }</p>
      <div
        className='postBody'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </StyledPost>
  )
}

export default Post
