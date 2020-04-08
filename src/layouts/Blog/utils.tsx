import React from 'react';

import Link from 'gatsby-link';

import {StyledLogo} from './styles';

const blogHeaderLinks = {
  "/about": (
    <StyledLogo>
      <Link to="/">🏠/about</Link>
    </StyledLogo>
  ),
  "/posts": (
    <StyledLogo>
      <Link to="/">🏠/posts</Link>
    </StyledLogo>
  ),
  "/talks": (
    <StyledLogo>
      <Link to="/">🏠/talks</Link>
    </StyledLogo>
  ),
  "/projects": (
    <StyledLogo>
      <Link to="/">🏠/projects</Link>
    </StyledLogo>
  )
};

export type HeaderLink = keyof typeof blogHeaderLinks;

export { blogHeaderLinks };
