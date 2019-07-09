import React, {FunctionComponent} from 'react';

import {StyledBlogHeader} from './styles';

const BlogHeader: FunctionComponent = props => {
  const { children } = props;
  return <StyledBlogHeader>{children}</StyledBlogHeader>;
};

export default BlogHeader;
