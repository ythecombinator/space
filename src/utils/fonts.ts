import { Karla, Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const karla = Karla({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
});

export default {
  spaceGrotesk,
  karla,
};
