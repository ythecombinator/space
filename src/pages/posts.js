import React from 'react'

import PostList from '../components/PostList'

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  console.log(data);
  return <PostList posts={posts} />
}

// eslint-disable-next-line
export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/posts/"} },
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
