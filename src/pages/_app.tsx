import 'css/prism.css';
import 'css/tailwind.css';
import { DefaultSeo as Metadata } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { siteMetadata } from 'config/constants';

import { usePathName } from 'utils/url';

import LayoutWrapper from 'components/shared/layout-wrapper';

export default function App({ Component, pageProps }: AppProps) {
  const url = usePathName();

  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        <Metadata
          title={siteMetadata.title}
          description={siteMetadata.description}
          openGraph={{
            url,
            type: 'website',
            locale: siteMetadata.locale,
            siteName: siteMetadata.title,
          }}
          twitter={{
            site: url,
            handle: siteMetadata.twitterHandle,
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
