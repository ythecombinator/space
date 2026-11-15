import ViewTransitionProvider from 'components/providers/view-transition-provider';
import WebMCPProvider from 'components/providers/webmcp-provider';
import 'css/tailwind.css';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Routes, siteMetadata } from 'config/constants';

import { markdownAlternate } from 'utils/agent/alternates';
import { getMetadataProps, usePathName } from 'utils/url';

import LayoutWrapper from 'components/shared/layout-wrapper';
import { DefaultSeo as Metadata } from 'components/shared/metadata';

function AgentLinks() {
  const { pathname, query } = useRouter();
  const href = markdownAlternate(pathname, query);
  if (!href) return null;

  return (
    <Head>
      <link rel="alternate" type="text/markdown" href={href} />
    </Head>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  const url = usePathName();
  const { route } = useRouter();

  const page =
    route === `/${Routes.cv}` ? (
      <>
        <Metadata {...getMetadataProps(url)} />
        <Component {...pageProps} />
      </>
    ) : (
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

  return (
    <>
      <WebMCPProvider />
      <AgentLinks />
      {page}
    </>
  );
}
