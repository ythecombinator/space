import 'css/prism.css';
import 'css/tailwind.css';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { siteMetadata } from 'config/constants';

import LayoutWrapper from 'components/shared/layout-wrapper';
import PageSEO from 'components/shared/seo-page';

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
