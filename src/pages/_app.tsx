import App from 'next/app';
import { ThemeProvider, Container } from 'theme-ui';
import NProgress from 'next-nprogress-emotion';

import Header from '../components/Header';
import theme from '../theme';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <NProgress />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default MyApp;
