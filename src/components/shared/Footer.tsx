import { chakra, Stack, VStack, Divider, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { siteConfig } from 'config/constants';

const firstGroup: LinkType[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/colophon',
    label: 'Colophon',
  },
  {
    href: '/speaking',
    label: 'Speaking',
  },
  {
    href: '/talks',
    label: 'Analytics',
  },
];

const secondGroup = [
  {
    href: '/talks',
    label: 'Twitter',
  },
  {
    href: '/talks',
    label: 'GitHub',
  },
  {
    href: '/talks',
    label: 'YouTube',
  },
  {
    href: '/talks',
    label: 'Polywork',
  },
  {
    href: '/talks',
    label: 'Twitch',
  },
];

const thirdGroup = [
  {
    href: '/uses',
    label: 'Uses',
  },
  {
    href: '/gear',
    label: 'Gear',
  },
  {
    href: '/bookmarks',
    label: 'Bookmarks',
  },
  {
    href: '/books',
    label: 'Books',
  },
];

/*~
 * COMPONENT
 */

const Footer: FC = () => {
  const { pathname } = useRouter();

  return (
    <VStack as="footer" alignItems="flex-start" pb={8} spacing={8}>
      <Divider />
      <Stack
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
        width="full"
        spacing={{ base: 2, md: 8 }}
      >
        <VStack alignItems="flex-start">
          {firstGroup.map(({ href, label }) => (
            <NextLink key={href} href={href} passHref>
              <Link
                color={pathname === href ? 'purple.500' : 'gray.500'}
                isExternal={href.startsWith('http')}
              >
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
        <VStack alignItems="flex-start">
          {secondGroup.map(({ href, label }) => (
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
        </VStack>
        <VStack alignItems="flex-start">
          {thirdGroup.map(({ href, label }) => (
            <NextLink key={href} href={href} passHref>
              <Link
                color={pathname === href ? 'purple.500' : 'gray.500'}
                isExternal={href.startsWith('http')}
              >
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent={{ base: 'center', md: 'space-between' }}
        direction={{ base: 'column', md: 'row' }}
        gridRowGap={4}
        width="full"
        spacing={0}
      >
        <Text color="gray.500" fontSize="sm">
          ©{' '}
          <chakra.span as="time" color="purple.500">
            {new Date().getFullYear()}
          </chakra.span>{' '}
          {siteConfig.title}
        </Text>
      </Stack>
    </VStack>
  );
};

export default Footer;
