import { Container } from '@chakra-ui/react';
import { Global, GlobalProps } from '@emotion/react';
import NProgress from 'next-nprogress-emotion';
import { FC, Fragment } from 'react';

import Header from 'components/shared/Header';

import * as styles from './Layout.styles';

/*~
 * TYPES
 */

export type LayoutProps = { children: React.ReactNode };

/*~
 * STYLES
 */

const global = () =>
  ({
    '*': {
      boxSizing: 'inherit',
    },
    html: {
      WebkitTextSizeAdjust: '100%',
    },
    img: {
      borderStyle: 'none',
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: '1em',
    },
    '[hidden]': {
      display: 'none',
    },
  } as GlobalProps['styles']);

/*~
 * COMPONENT
 */

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <Global styles={global} />
      {/* TODO */}
      {/* <Seo /> */}
      <NProgress
        color="accent"
        options={{ trickleSpeed: 50 }}
        showAfterMs={300}
        spinner
      />
      <Header />
      <Container maxW="2xl">{children}</Container>
      {/* <Footer />  */}
    </Fragment>
  );
};

export default Layout;
