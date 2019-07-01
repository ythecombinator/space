import React, {FunctionComponent} from 'react';

import {SocialNetwork} from 'model/SocialNetwork';

import Icon from '../SocialIcon';

interface Props {
  socialNetwork: SocialNetwork;
}

const SocialLink: FunctionComponent<Props> = props => {
  const { socialNetwork } = props;
  return (
    <a href={socialNetwork.link} target="_blank" rel="noopener">
      <Icon identifier={socialNetwork.name} />
    </a>
  );
};

export default SocialLink;
