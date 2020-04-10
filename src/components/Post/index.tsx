import React, {FunctionComponent} from 'react';

import {Frontmatter} from 'model/Remark';

import {format} from 'utils/date';

import * as Styled from './styles';

interface Props {
  postData: {
    html: string;
    frontmatter: Frontmatter;
  };
}

const Post: FunctionComponent<Props> = (props) => {
  const { html, frontmatter } = props.postData;

  const date = format(frontmatter.date);
  const isBlogEntry = frontmatter.type === "blog_entry";

  return (
    <Styled.Post>
      <h1>{frontmatter.title}</h1>
      {isBlogEntry && <p id="date">Published on {date}</p>}
      <div className="postBody" dangerouslySetInnerHTML={{ __html: html }} />
    </Styled.Post>
  );
};

export default Post;
