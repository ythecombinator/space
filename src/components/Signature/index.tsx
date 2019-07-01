import React, {FunctionComponent} from 'react';

import {StyledSignature} from './styles';

interface Props {
  name: string;
}

const Signature: FunctionComponent<Props> = props => {
  const { name } = props;
  return <StyledSignature>{`— @${name}`}</StyledSignature>;
};

export default Signature;
