import styled from 'styled-components';

import {colors} from 'styles/colors';

const { primary, secondary } = colors;

const StyledBlogHeader = styled.div`
  text-align: left;
  margin-left: 1.4rem;
  margin-top: 1.4rem;
  h1 {
    color: ${primary};
    font-size: 1.4rem;
    font-family: "Source Code Pro", monospace;
    font-weight: 700;
    border-bottom: 4px solid ${primary};
    display: inline-flex;
    &:hover {
      border-bottom: 4px solid ${secondary};
    }
    a {
      transition: all 0.3s ease-in-out;
      padding: 0 4px;
      color: ${primary};
      text-decoration: none;
      &:hover {
        color: ${secondary};
      }
    }
  }
`;

export { StyledBlogHeader };
