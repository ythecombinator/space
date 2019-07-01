import React, {FunctionComponent} from 'react';

import {StyledFooter} from './styles';

const Footer: FunctionComponent = props => {
  const { children } = props;
  return <StyledFooter>{children}</StyledFooter>;
};

export default Footer;
