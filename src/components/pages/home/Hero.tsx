import { Link as LinkType } from '@/types/link';
import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Icon,
  Link,
} from '@chakra-ui/react';
import { Prose } from '@nikolovlazar/chakra-ui-prose';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { FiArrowUpRight } from 'react-icons/fi';

import { siteConfig } from 'config/constants';

import ExternalLink from 'components/shared/LinkExternal';
import MDXRenderer from 'components/shared/MDXRenderer';

import HeroImage from 'components/pages/home/HeroImage';

type SocialLink = LinkType & { color?: string };

const socialLinks: SocialLink[] = [
  {
    href: 'Twitter',
    label: 'Twitter',
    color: 'twitter',
  },
  {
    href: 'Twitter',
    label: 'GitHub',
  },
  {
    href: 'Twitter',
    label: 'Polywork',
    color: 'purple.500',
  },
];

type Props = {
  contents: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const Hero = (props: Props) => {
  return (
    <Stack
      as="section"
      alignItems="center"
      direction={{ base: 'column-reverse', md: 'row' }}
      w="full"
      spacing={12}
    >
      <VStack alignItems="flex-start" w="full" spacing={3}>
        <Stack
          alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          direction={{ base: 'column', md: 'row' }}
          w="full"
          spacing={3}
        >
          <Heading as="h1" size="lg">
            {`🙋🏻‍♂️ Hi, I'm ${siteConfig.baseTitle}!`}
          </Heading>
        </Stack>
        <Text as="h2" lineHeight="175%">
          <Prose>
            <MDXRenderer {...props.contents} />
          </Prose>
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
          {socialLinks.map(({ href, label, color }) => (
            <Button
              key={href}
              as={Link}
              justifyContent={{ base: 'flex-start', md: 'center' }}
              px={4}
              color={color}
              href={href}
              rightIcon={<Icon as={FiArrowUpRight} />}
              target="_blank"
              variant="ghost"
            >
              {label}
            </Button>
          ))}
        </Stack>
      </VStack>
      <HeroImage />
    </Stack>
  );
};

export default Hero;
