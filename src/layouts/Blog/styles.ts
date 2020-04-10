import styled from 'styled-components';

require("prism-themes/themes/prism-ghcolors.css");

export const Main = styled.main`
  font-family: source sans pro, sans-serif;
  padding: 0 1rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  img: {
    padding: 0 1rem 4px 0;
  }
`;
