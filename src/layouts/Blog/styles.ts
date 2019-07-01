import styled from 'styled-components';

import {colors} from 'styles/colors';

const { primary } = colors;

require("prism-themes/themes/prism-ghcolors.css");

const StyledMain = styled.main`
  font-family: source sans pro, sans-serif;
  padding: 0 1rem;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  &:hover {
    color: white;
    background: ${primary};
  }
  img: {
    padding: 0 1rem 4px 0;
  }
`;

export { StyledMain, StyledLogo };
