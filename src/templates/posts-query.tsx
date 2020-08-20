import {graphql} from 'gatsby';

import BlogComponent from 'components/templates/posts';

export default BlogComponent;

export const query = graphql`
  query($formatString: String!) {
    allPost(sort: { fields: date, order: DESC }, limit: 10) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
  }
`;
