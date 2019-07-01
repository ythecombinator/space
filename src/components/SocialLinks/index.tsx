import React, {FunctionComponent} from 'react';

import {SocialNetwork} from 'model/SocialNetwork';

import SocialLink from './SocialLink';
import {StyledSocialLinks} from './styles';

interface Props {
  socialNetworks: SocialNetwork[];
}

const SocialLinks: FunctionComponent<Props> = props => {
  const { socialNetworks } = props;
  return (
    <StyledSocialLinks>
      {socialNetworks.map(socialNetwork => (
        <SocialLink
          key={`${socialNetwork.name}`}
          socialNetwork={socialNetwork}
        />
      ))}
    </StyledSocialLinks>
  );
};

export default SocialLinks;
