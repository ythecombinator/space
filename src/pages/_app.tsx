import 'css/prism.css';
import 'css/tailwind.css';
import { DefaultSeo as Metadata } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Routes, siteMetadata } from 'config/constants';

import { getMetadataProps, usePathName } from 'utils/url';

import LayoutWrapper from 'components/shared/layout-wrapper';

export default function App({ Component, pageProps }: AppProps) {
  const url = usePathName();
  const { route } = useRouter();

  if (route === `/${Routes.cv}`) {
    return (
      <>
        <Metadata {...getMetadataProps(url)} />
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Metadata {...getMetadataProps(url)} />
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
