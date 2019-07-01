import React, {FunctionComponent} from 'react';

import Link from 'gatsby-link';

import {EdgesEntity} from 'model/Remark';

import {StyledPostList} from './styles';

interface Props {
  posts: EdgesEntity[];
}

const PostList: FunctionComponent<Props> = props => {
  const { posts } = props;

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
