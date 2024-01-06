import localFont from 'next/font/local';

const generalSansFont = localFont({
  variable: '--font-general-sans',
  src: [
    {
      path: './GeneralSans/GeneralSans-VariableItalic.ttf',
    },
    {
      path: './GeneralSans/GeneralSans-Variable.ttf',
    },
  ],
});

const recoletaFont = localFont({
  variable: '--font-recoleta',
  src: [
    {
      path: './Recoleta/Recoleta-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Recoleta/Recoleta-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Recoleta/Recoleta-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './Recoleta/Recoleta-Regular.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './Recoleta/Recoleta-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Recoleta/Recoleta-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Recoleta/Recoleta-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
});

export default {
  recoleta: recoletaFont,
  generalSans: generalSansFont,
};
