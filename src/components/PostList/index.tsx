import React, {FunctionComponent} from 'react';

import Link from 'gatsby-link';

import {EdgesEntity} from 'model/Remark';

import * as Styled from './styles';

interface Props {
  posts: EdgesEntity[];
}

const PostList: FunctionComponent<Props> = (props) => {
  const { posts } = props;

  return (
    <Styled.PostList>
      {posts.map(({ node: post }) => {
        return (
          <h2 key={post.id}>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </h2>
        );
      })}
    </Styled.PostList>
  );
};

export default PostList;
