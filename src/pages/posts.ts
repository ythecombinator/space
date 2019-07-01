import {graphql} from 'gatsby';

import Page from 'components/pages/posts';

export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
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
`;

export default Page;
