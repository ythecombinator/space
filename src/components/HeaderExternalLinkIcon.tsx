import { FC } from 'react';
import {
  SiAngellist,
  SiDevdotto,
  SiDeviantart,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiSpeakerdeck,
  SiTwitter,
  SiUnsplash,
} from 'react-icons/si';

/*~
 * TYPES
 */

export type HeaderExternalLinkIconIdentifier =
  | `twitter`
  | `github`
  | `speakerdeck`
  | `linkedin`
  | `angel.co`
  | `instagram`
  | `unsplash`
  | `deviantart`
  | `devto`;

export type HeaderExternalLinkIconProps = {
  identifier: HeaderExternalLinkIconIdentifier;
};

/*~
 * COMPONENT
 */

const HeaderExternalLinkIcon: FC<HeaderExternalLinkIconProps> = (props) => {
  const { identifier } = props;

  switch (identifier) {
    case 'twitter': {
      return <SiTwitter />;
    }
    case 'github': {
      return <SiGithub />;
    }
    case 'devto': {
      return <SiDevdotto />;
    }
    case 'speakerdeck': {
      return <SiSpeakerdeck />;
    }
    case 'linkedin': {
      return <SiLinkedin />;
    }
    case 'angel.co': {
      return <SiAngellist />;
    }
    case 'instagram': {
      return <SiInstagram />;
    }
    case 'unsplash': {
      return <SiUnsplash />;
    }
    case 'deviantart': {
      return <SiDeviantart />;
    }
    default:
      return <SiTwitter />;
  }
};

export default HeaderExternalLinkIcon;
