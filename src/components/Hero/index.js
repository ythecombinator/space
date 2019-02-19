import React from "react";
import styled from "styled-components";

const StyledHero = styled.img`
  max-width: 100%;
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 50%;
`;

const Hero = ({ source, description }) => {
  return <StyledHero src={source} alt={description} />;
};

export default Hero;
