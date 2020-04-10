import React from 'react';

import Link from 'gatsby-link';

import * as Styled from './styles';

const blogHeaderLinks = {
  "/about": (
    <Styled.Logo>
      <Link to="/">🏠/about</Link>
    </Styled.Logo>
  ),
  "/posts": (
    <Styled.Logo>
      <Link to="/">🏠/posts</Link>
    </Styled.Logo>
  ),
  "/talks": (
    <Styled.Logo>
      <Link to="/">🏠/talks</Link>
    </Styled.Logo>
  ),
  "/projects": (
    <Styled.Logo>
      <Link to="/">🏠/projects</Link>
    </Styled.Logo>
  ),
};

export type HeaderLink = keyof typeof blogHeaderLinks;

export { blogHeaderLinks };
