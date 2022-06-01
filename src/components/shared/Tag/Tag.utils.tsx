import { darken, lighten } from '@theme-ui/color';
import { MdOutlineScience } from 'react-icons/md';
import { SiReact } from 'react-icons/si';

export const TagColor: Record<string, string> = {
  react: '#61dafb',
  'react-native': '#fb8261',
  'mad-science': '#546de5',
};

export const TagIcon: Record<string, JSX.Element> = {
  react: <SiReact />,
  'react-native': <SiReact />,
  'mad-science': <MdOutlineScience />,
};

export const transformColor = (color: string, colorMode: string) => {
  const isDark = colorMode === 'dark';
  return isDark ? darken(color, 0.5) : lighten(color, 0.3);
};
