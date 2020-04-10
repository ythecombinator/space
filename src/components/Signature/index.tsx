import React, {FunctionComponent} from 'react';

import * as Styled from './styles';

interface Props {
  name: string;
}

const Signature: FunctionComponent<Props> = (props) => {
  const { name } = props;
  return <Styled.Container>{`— @${name}`}</Styled.Container>;
};

export default Signature;
