import { darken, lighten } from '@theme-ui/color';
import { SiReact } from 'react-icons/si';

export const TagColor: Record<string, string> = {
  react: 'rgb(97, 218, 251)',
  'react-native': 'rgb(97, 218, 251)',
};

export const TagIcon: Record<string, JSX.Element> = {
  react: <SiReact />,
  'react-native': <SiReact />,
};

export const transformColor = (color: string, colorMode: string) => {
  const isDark = colorMode === 'dark';
  return isDark ? darken(color, 0.5) : lighten(color, 0.3);
};
