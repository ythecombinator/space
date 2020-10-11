import React, {FunctionComponent} from 'react';

import {
  FaAngellist,
  FaDev,
  FaDeviantart,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSpeakerDeck,
  FaTwitter,
} from 'react-icons/fa';
import {RiUnsplashFill} from 'react-icons/ri';

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
    case "unsplash": {
      Icon = RiUnsplashFill;
      break;
    }
    case "deviantart": {
      Icon = FaDeviantart;
      break;
    }
  }

  return <Icon />;
};

export default SocialIcon;
