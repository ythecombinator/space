import {graphql} from 'gatsby';

import Page from 'components/pages/talks';

export const pageQuery = graphql`
  query TalksQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/talks/" } }
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
