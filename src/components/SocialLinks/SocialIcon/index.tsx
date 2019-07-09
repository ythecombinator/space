import React, {FunctionComponent} from 'react';

import Icon from 'react-icon-base';

import icons from 'utils/icons';

interface Props {
  identifier: keyof typeof icons;
}

const SocialIcon: FunctionComponent<Props> = props => {
  const { identifier } = props;

  return (
    <Icon viewBox="0 0 40 40">
      <g>
        <path d={icons[identifier]} />
      </g>
    </Icon>
  );
};

export default SocialIcon;
