import React from "react";
import styled from "styled-components";

import { colors } from "../../styles/colors";

const { primary } = colors;

const StyledHeader = styled.div`
  text-align: left;
  margin-left: 1.4rem;
  margin-top: 1.4rem;
  h1 {
    color: ${primary};
    font-size: 1.4rem;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    border-bottom: 4px solid ${primary};
    display: inline-flex;
    &:hover {
      border-bottom: none;
    }
    a {
      transition: all 0.3s ease-in-out;
      padding: 0 4px;
      color: ${primary};
      text-decoration: none;
      &:hover {
        color: white;
        background: ${primary};
      }
    }
  }
`;

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
