import React, {FunctionComponent} from 'react';

import {
  FaAngellist,
  FaDev,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSpeakerDeck,
  FaTwitter,
} from 'react-icons/fa';

import {Identifier} from 'model/SocialNetworks';

interface Props {
  identifier: Identifier;
}

const SocialIcon: FunctionComponent<Props> = (props) => {
  const { identifier } = props;

  let Icon;

  switch (identifier) {
    case "twitter": {
      Icon = FaTwitter;
      break;
    }
    case "github": {
      Icon = FaGithub;
      break;
    }
    case "devto": {
      Icon = FaDev;
      break;
    }
    case "speakerdeck": {
      Icon = FaSpeakerDeck;
      break;
    }
    case "linkedin": {
      Icon = FaLinkedinIn;
      break;
    }
    case "angel.co": {
      Icon = FaAngellist;
      break;
    }
    case "instagram": {
      Icon = FaInstagram;
      break;
    }
  }

  return <Icon />;
};

export default SocialIcon;
