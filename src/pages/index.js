import React from "react";
import styled from "styled-components";
import { Markdown } from "react-showdown";
import { sections, socialData, githubProfilePicture } from "../data/about";

import { colors } from "..//styles/colors";
import Signature from "../components/Signature";
import Hero from "../components/Hero";
import SocialLinks from "../components/SocialLinks";

const StyledContent = styled.div`
  max-width: 22em;
  margin: 90px;
  transition: all 250ms ease;
  font-family: source sans pro, sans-serif;
  font-weight: 300;

  :first-child {
    margin-top: 0;
  }

  p {
    cursor: default;
    background: ${colors.background};
    color: ${colors.text.regular};
    font-size: 19px;
    line-height: 1.6;
  }

  a {
    color: ${colors.links.regular.text};
    text-decoration: none;
    border-bottom: solid 1px ${colors.links.regular.border};
    transition: color 250ms linear;
    &:hover {
      color: ${colors.links.highlighted.text};
      border-bottom: solid 1px ${colors.links.highlighted.border};
      transition: color 500ms linear;
    }
  }

  strong {
    color: ${colors.text.highlighted};
    font-weight: bold;
  }

  ul,
  ol,
  p {
    margin: 1.5em 0;
  }
`;

export default () => {
  return (
    <StyledContent>
      <Hero source={githubProfilePicture} description="It's me, Matheus!" />
      <Markdown markup={sections.shortIntro} />
      <SocialLinks socialNetworks={socialData} />
      <Signature name="ythecombinator" />
    </StyledContent>
  );
};
