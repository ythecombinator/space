import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import App from 'next/app';
import Head from 'next/head';

import { siteConfig } from 'config/constants';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ChakraProvider>
        <Head>
          <meta
            content="width=device-width, initial-scale=1.0"
            name="viewport"
          />
          <link rel="shortcut icon" href="/icon.png" />
        </Head>
        <DefaultSeo
          title={siteConfig.title}
          description={siteConfig.description}
          openGraph={{
            type: 'website',
            url: siteConfig.url,
            site_name: 'SiteName',
            images: [
              {
                url: '/cover.png',
                width: 1200,
                height: 630,
                alt: siteConfig.title,
                type: 'image/png',
              },
            ],
          }}
          twitter={{
            handle: siteConfig.twitterHandle,
            site: siteConfig.url,
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} />
      </ChakraProvider>
    );
  }
}

export default MyApp;
