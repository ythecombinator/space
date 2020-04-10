import React, {FunctionComponent} from 'react';

import * as Styled from './styles';

interface Props {
  source: string;
  description: string;
}

const Hero: FunctionComponent<Props> = (props) => {
  const { source, description } = props;
  return <Styled.Hero src={source} alt={description} />;
};

export default Hero;
