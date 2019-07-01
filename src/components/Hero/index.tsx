import React, {FunctionComponent} from 'react';

import {StyledHero} from './styles';

interface Props {
  source: string;
  description: string;
}

const Hero: FunctionComponent<Props> = props => {
  const { source, description } = props;
  return <StyledHero src={source} alt={description} />;
};

export default Hero;
