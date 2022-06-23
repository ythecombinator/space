import { Center, chakra, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { siteConfig } from 'config/constants';

/*~
 * COMPONENT
 */

const Footer: FC = () => {
  return (
    <Center
      as="footer"
      borderTop="1px solid"
      borderTopColor="brand.400"
      marginTop={20}
    >
      <chakra.p padding={4}>
        &copy; {new Date().getFullYear()} by {siteConfig.baseTitle}. All rights
        reserved.
      </chakra.p>
    </Center>
  );
};

export default Footer;
