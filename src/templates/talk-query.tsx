import {graphql} from 'gatsby';

import TalkComponent from 'components/templates/talk';

export default TalkComponent;

export const query = graphql`
  query($slug: String!, $formatString: String!) {
    talk(slug: { eq: $slug }) {
      slug
      title
      date(formatString: $formatString)
      description
      body
      excerpt
      timeToRead
      banner {
        childImageSharp {
          resize(width: 1200, quality: 90) {
            src
          }
        }
      }
    }
  }
`;
