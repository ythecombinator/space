import {graphql} from 'gatsby';

import TalksComponent from 'components/templates/talks';

export default TalksComponent;

export const query = graphql`
  query($formatString: String!) {
    allTalk(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        description
      }
    }
  }
`;
