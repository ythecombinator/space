import React from 'react'

import PostList from '../components/PostList'

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return <PostList posts={posts} />
}

// eslint-disable-next-line
export const pageQuery = graphql`
  query TalksQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/talks/"} },
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
