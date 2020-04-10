import React, {FunctionComponent} from 'react';

import * as Styled from './styles';

const Footer: FunctionComponent = (props) => {
  const { children } = props;
  return <Styled.Footer>{children}</Styled.Footer>;
};

export default Footer;
