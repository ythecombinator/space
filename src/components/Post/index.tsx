import React, {FunctionComponent} from 'react';

import {Frontmatter} from 'model/Remark';

import {format} from 'utils/date';

import {StyledPost} from './styles';

interface Props {
  postData: {
    html: string;
    frontmatter: Frontmatter;
  };
}

const Post: FunctionComponent<Props> = props => {
  const { html, frontmatter } = props.postData;

  const date = format(frontmatter.date);

  return (
    <StyledPost>
      <h1>{frontmatter.title}</h1>
      <p id="date">Published on {date}</p>
      <div className="postBody" dangerouslySetInnerHTML={{ __html: html }} />
    </StyledPost>
  );
};

export default Post;
