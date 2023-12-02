import localFont from 'next/font/local';

const biotifyFont = localFont({
  variable: '--font-biotify',
  src: [
    {
      path: './Biotif-Bold.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Biotif-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Biotif-Regular.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Biotif-RegularItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './Biotif-SemiBold.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
});

const neuzeitGroteskFont = localFont({
  variable: '--font-neuzeitGrotesk',
  src: [
    {
      path: './NeuzeitGrotesk-Bold.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export default {
  biotify: biotifyFont.className,
  neuzeitGrotesk: neuzeitGroteskFont.className,
};
