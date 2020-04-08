import {graphql} from 'gatsby';

import Page from 'components/pages/projects';

export const pageQuery = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            path
            thumbnail
          }
        }
      }
    }
  }
`;

export default Page;
