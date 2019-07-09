import icons from 'utils/icons';

export interface SocialNetwork {
  name: keyof typeof icons;
  link: string;
}
