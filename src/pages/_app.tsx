import 'css/tailwind.css';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Routes, siteMetadata } from 'config/constants';

import { getMetadataProps, usePathName } from 'utils/url';

import ViewTransitionProvider from 'components/providers/view-transition-provider';
import LayoutWrapper from 'components/shared/layout-wrapper';
import { DefaultSeo as Metadata } from 'components/shared/metadata';

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
      <ViewTransitionProvider>
        <LayoutWrapper>
          <Metadata {...getMetadataProps(url)} />
          <Component {...pageProps} />
        </LayoutWrapper>
      </ViewTransitionProvider>
    </ThemeProvider>
  );
}
