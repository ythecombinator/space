import React, {FunctionComponent} from 'react';

import {SocialNetwork} from 'model/SocialNetwork';

import SocialLink from './SocialLink';
import * as Styled from './styles';

interface Props {
  socialNetworks: SocialNetwork[];
}

const SocialLinks: FunctionComponent<Props> = (props) => {
  const { socialNetworks } = props;
  return (
    <Styled.Container>
      {socialNetworks.map((socialNetwork) => (
        <SocialLink
          key={`${socialNetwork.name}`}
          socialNetwork={socialNetwork}
        />
      ))}
    </Styled.Container>
  );
};

export default SocialLinks;
