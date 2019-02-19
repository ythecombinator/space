import React from "react";
import styled from "styled-components";

import { colors } from "../../styles/colors";

const StyledSignature = styled.div`
  color: ${colors.signature};
  margin-top: 0.5em;
  margin-left: -30px;
  font-size: 1.5em;
  transition: all 250ms ease;
`;

const Signature = ({ name }) => {
  return <StyledSignature>{`— @${name}`}</StyledSignature>;
};

export default Signature;
