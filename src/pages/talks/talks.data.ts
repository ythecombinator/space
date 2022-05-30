import { gql } from '@apollo/client';

export const talkQuery = gql`
  query talkBySlug($slug: String!) {
    talkCollection(where: { slug: $slug }, limit: 1) {
      items {
        title
        abstract {
          json
        }
        sessionsCollection {
          items {
            sys {
              id
            }
            slides
            recording
            online
            audience
            event {
              name
              website
              startingDate
              endingDate
              city {
                name
                photo {
                  url
                }
                country {
                  name
                  flag
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const talkSlugs = gql`
  query talkSlugs {
    talkCollection {
      items {
        slug
      }
    }
  }
`;
