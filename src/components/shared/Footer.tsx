import { chakra, Stack, VStack, Divider, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

import { siteConfig, socialNetworks } from 'config/constants';

/*~
 * COMPONENT
 */

const Footer: FC = () => {
  return (
    <VStack as="footer" paddingBottom={8} spacing={8}>
      <Divider />
      {/* Social Links */}
      <Stack
        justifyContent="center"
        direction={{ base: 'column', md: 'row' }}
        width="full"
        spacing={{ base: 2, md: 8 }}
      >
        {socialNetworks.map(({ href, label }) => (
          <NextLink key={href} href={href} passHref>
            <Link
              color="gray.500"
              isExternal={href.startsWith('http')}
              target="_blank"
            >
              {label}
            </Link>
          </NextLink>
        ))}
      </Stack>
      {/* Copyright */}
      <Text color="gray.500" fontSize="sm">
        © <chakra.span as="time">{new Date().getFullYear()}</chakra.span>{' '}
        {siteConfig.title}
      </Text>
    </VStack>
  );
};

export default Footer;
