import { darken, lighten } from '@theme-ui/color';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { MdOutlineScience } from 'react-icons/md';
import { SiReact, SiJavascript } from 'react-icons/si';

export const TagColor: Record<string, string> = {
  react: '#61dafb',
  'react-native': '#fb8261',
  'mad-science': '#546de5',
  javascript: '#f7df1e',
  performance: '#c44569',
};

export const TagIcon: Record<string, JSX.Element> = {
  react: <SiReact />,
  'react-native': <SiReact />,
  'mad-science': <MdOutlineScience />,
  javascript: <SiJavascript />,
  performance: <HiOutlineLightningBolt />,
};

export const transformColor = (color: string, colorMode: string) => {
  const isDark = colorMode === 'dark';
  return isDark ? darken(color, 0.5) : lighten(color, 0.3);
};
