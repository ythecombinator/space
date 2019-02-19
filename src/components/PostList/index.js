import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

import { colors } from "../../styles/colors";

const { primary } = colors;

const StyledPostList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-left: 0.8rem;
  a {
    font-size: 1.1rem;
    font-family: source sans pro, sans-serif;
    font-weight: 600;
    color: ${primary};
    text-decoration: none;
    padding: 10px;
    &:hover {
      background: ${primary};
      color: white;
    }
  }
`;

const PostList = ({ posts }) => {
  return (
    <StyledPostList>
      {posts.map(({ node: post }) => {
        return (
          <h2 key={post.id}>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </h2>
        );
      })}
    </StyledPostList>
  );
};

export default PostList;
