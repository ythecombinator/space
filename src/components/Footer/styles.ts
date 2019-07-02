import styled from 'styled-components';

import {colors} from 'styles/colors';

const { tertiary } = colors;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  p {
    color: ${tertiary};
    font-size: 0.9rem;
    font-weight: 300;
    font-family: source sans pro, sans-serif;
  }
`;

export { StyledFooter };
