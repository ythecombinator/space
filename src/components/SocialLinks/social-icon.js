import React from "react";

import icons from "../../utils/icons";

import Icon from "react-icon-base";

const SocialIcon = ({ identifier }) => (
  <Icon viewBox="0 0 40 40">
    <g>
      <path d={icons[identifier]} />
    </g>
  </Icon>
);

export default SocialIcon;
