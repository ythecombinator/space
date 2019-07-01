import styled from 'styled-components';

import {colors} from 'styles/colors';

const { secondary, text, dates } = colors;

const StyledPost = styled.div`
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;

  h1 {
    color: ${text.highlighted};
    font-family: "Poppin", sans-serif;
    font-weight: 700;
    text-align: center;
    font-size: 1.6rem;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
  p#date {
    font-family: source sans pro, sans-serif;
    color: ${dates.regular};
    text-align: center;
    font-size: 0.8rem;
    font-weight: 400;
  }
  .postBody {
    font-family: source sans pro, sans-serif;
    font-weight: 300;
    display: block;
    margin: 0 auto;
    width: 100%;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: ${text.regular};
    @media (min-width: 768px) {
      width: 60%;
    }
    a {
      color: ${secondary};
      transition: all 0.3s ease-in-out;
      text-decoration: none;
      &:hover {
        color: white;
        background: ${secondary};
      }
    }
    img {
      max-width: 100%;
    }
    pre {
      overflow-x: scroll;
    }
    blockquote {
      border-left: 5px solid #ccc;
      margin: 1.5em 10px;
      padding: 0.5em 10px;
    }
  }
`;

export { StyledPost };
