import { Container, VStack } from '@chakra-ui/react';
import NProgress from 'next-nprogress-emotion';
import { FC, Fragment } from 'react';

import Footer from 'components/shared/Footer';
import Header from 'components/shared/Header';

/*~
 * TYPES
 */

export type LayoutProps = { children: React.ReactNode };

/*~
 * COMPONENT
 */

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <NProgress
        color="accent"
        options={{ trickleSpeed: 50 }}
        showAfterMs={300}
        spinner
      />
      <Header />
      <Container
        display="flex"
        maxWidth="container.sm"
        minHeight={{ base: 'auto', md: '100vh' }}
        paddingX={{ base: 4, lg: 0 }}
        centerContent
      >
        <VStack alignItems="stretch" flex={1} width="full" spacing={16}>
          <VStack as="main" flex={1} width="full" spacing={8}>
            {children}
          </VStack>
          <Footer />
        </VStack>
      </Container>
    </Fragment>
  );
};

export default Layout;
