import React, { FunctionComponent } from 'react';

import * as Styled from './styles';

interface Props {
  url: string;
}

const CardLink: FunctionComponent<Props> = (props) => {
  const { url, children } = props;

  return <Styled.Button href={url}>{children}</Styled.Button>;
};

export default CardLink;
