import React from "react";
import styled from "styled-components";

import SocialLink from "./social-link";

const StyledSocialLinks = styled.div`
  margin-top: 60px;
  margin-left: -13px;

  a {
    border: 0;
    margin-right: 20px;
    display: inline-block;
    width: 48px;
    height: 48px;
    line-height: 48px;
    font-size: 32px;
    text-align: center;
  }

  a:hover {
    border: 0;
  }

  i {
    color: #aaa;
    transition: transform 250ms ease, color 250ms linear;
    transform: scale(0.7);
  }

  a:hover i {
    color: #3d8;
    transition: transform 100ms ease;
    transform: scale(1);
  }

  a,
  ol,
  p,
  ul {
    transition: all 250ms ease;
  }
`;

const SocialLinks = ({ socialNetworks }) => {
  return (
    <StyledSocialLinks>
      {socialNetworks.map(socialNetwork => (
        <SocialLink
          key={`${socialNetwork.name}`}
          socialNetwork={socialNetwork}
        />
      ))}
    </StyledSocialLinks>
  );
};

export default SocialLinks;
