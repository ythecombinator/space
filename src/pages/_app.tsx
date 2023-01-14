import LayoutWrapper from 'components/LayoutWrapper';
import 'css/prism.css';
import 'css/tailwind.css';
import siteMetadata from 'data/siteMetadata';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Suspense } from 'react';

import { PageSEO } from 'components/shared/SEO';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        {/* <Analytics /> */}
        <PageSEO
          title={siteMetadata.title}
          description={siteMetadata.description}
        />
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
