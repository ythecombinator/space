import styled from 'styled-components';

const StyledMain = styled.main`
  body {
    font-family: source sans pro, sans-serif;
  }

  @media (max-width: 768px) {
    body {
      font-size: 16px;
      line-height: 1.6;
    }

    ul,
    ol,
    p {
      margin: 1.35em 0;
    }
  }

  @media (max-width: 468px) {
    body {
      font-size: 15px;
      line-height: 1.6;
      color: #222;
    }

    a {
      color: #111;
    }

    ul,
    ol,
    p {
      margin: 1.25em 0;
    }
  }
`;

export { StyledMain };
