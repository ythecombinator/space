import { darken, lighten } from '@theme-ui/color';
import { AiOutlineCode } from 'react-icons/ai';
import {
  HiOutlineLightningBolt,
  HiOutlineCode,
  HiHashtag,
  HiOutlineServer,
  HiOutlineCloud,
} from 'react-icons/hi';
import { MdOutlineScience } from 'react-icons/md';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiSwift,
  SiServerless,
} from 'react-icons/si';

const TagColor: Record<string, string> = {
  // Libs & Tools
  react: '#61dafb',
  'react-native': '#61dafb',
  serverless: '#fd5750',
  // Languages
  javascript: '#f7df1e',
  typescript: '#3178c6',
  php: '#8892BF',
  swift: '#f05138',
  // Topics
  devops: '#cf6a87',
  'back-end': '#574b90',
  performance: '#c44569',
  'mad-science': '#546de5',
  'developer-tools': '#f5cd79',
  'programming-languages': '#e66767',
};

export const getTagColor = (id: string) => TagColor[id] ?? '#f3a683';

const TagIcon: Record<string, JSX.Element> = {
  // Libs & Tools
  react: <SiReact />,
  'react-native': <SiReact />,
  serverless: <SiServerless />,
  // Languages
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  php: <SiPhp />,
  swift: <SiSwift />,
  // Topics
  devops: <HiOutlineCloud />,
  'back-end': <HiOutlineServer />,
  performance: <HiOutlineLightningBolt />,
  'mad-science': <MdOutlineScience />,
  'developer-tools': <AiOutlineCode />,
  'programming-languages': <HiOutlineCode />,
};

export const getTagIcon = (id: string) => TagIcon[id] ?? <HiHashtag />;

export const transformColor = (color: string, colorMode: string) => {
  const isDark = colorMode === 'dark';
  return isDark ? darken(color, 0.3) : lighten(color, 0.2);
};
