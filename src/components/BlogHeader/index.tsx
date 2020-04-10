import React, {FunctionComponent} from 'react';

import * as Styled from './styles';

const BlogHeader: FunctionComponent = (props) => {
  const { children } = props;
  return <Styled.BlogHeader>{children}</Styled.BlogHeader>;
};

export default BlogHeader;
