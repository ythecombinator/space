import React from "react";
import styled from "styled-components";

import { colors } from "../../styles/colors";

const { primary } = colors;

const StyledMenu = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 0;
  li {
    font-size: 1.2rem;
    font-family: "Lato", sans-serif;
    font-weight: 600;
    &:nth-child(even) {
      margin: 0.6rem 0;
    }
    &:last-child {
      margin-left: 10px;
    }
    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
    img#mail {
      color: ${primary};
      width: 20px;
      height: 20px;
      display: inline-block;
      margin-bottom: 6px;
      margin-left: 4px;
    }
    img#external-link {
      color: ${primary};
      width: 11px;
      height: 11px;
      display: inline-block;
      margin-bottom: 6px;
      margin-left: 4px;
    }
  }
  a {
    color: ${primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Menu = ({ children }) => {
  return <StyledMenu>{children}</StyledMenu>;
};

export default Menu;
