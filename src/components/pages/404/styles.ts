import styled from 'styled-components';

import {colors} from 'styles/colors';

const { primary } = colors;

const Styled404 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    padding-block-start: 1em;
    padding-block-end: 1em;
    margin: 0;
    font-size: 1.1rem;
    font-family: "Poppin", sans-serif;
    font-weight: 600;
    color: ${primary};
    @media (min-width: 768px) {
      font-size: 2.2rem;
    }
  }
  img {
    width: 38rem;
    border-radius: 4px;
    margin-bottom: 2rem;
    width: 50%;
    max-width: 30rem;
    min-width: 15rem;
  }
  a {
    transition: all 0.3s ease-in-out;
    color: ${primary};
    text-decoration: none;
    &:hover {
      color: white;
      background: ${primary};
    }
  }
  a p {
    &:hover {
      color: white;
      background: ${primary};
    }
  }
`;

export { Styled404 };
