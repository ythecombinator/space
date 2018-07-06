import React from 'react'
import Helmet from 'react-helmet'

import Post from '../components/Post'

import favicon from '../assets/favicon.png'

export default function Template ({ data }) {
  const post = data.markdownRemark

  return (
    <div>
      <Helmet
        title={post.frontmatter.title}
        link={[
          {
            rel: "shortcut icon", 
            type: "image/png",
            href: favicon,
          }        
        ]}        
      />
      <Post postData={post} />
    </div>
  )
}

// eslint-disable-next-line
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`
