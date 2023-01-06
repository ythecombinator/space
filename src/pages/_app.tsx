import LayoutWrapper from 'components/LayoutWrapper';
import { MainSEO } from 'components/NextSEO';
import 'css/prism.css';
import 'css/tailwind.css';
import siteMetadata from 'data/siteMetadata';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

const isDevelopment = process.env.NODE_ENV === 'development';
const isSocket = process.env.SOCKET;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <LayoutWrapper>
        {/* <Analytics /> */}
        <MainSEO />
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
