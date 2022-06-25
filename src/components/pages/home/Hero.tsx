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

import { siteConfig, socialNetworks } from 'config/constants';

import MDXRenderer from 'components/shared/MDXRenderer';

import HeroImage from 'components/pages/home/HeroImage';

export type HeroProps = {
  contents: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const Hero = (props: HeroProps) => {
  return (
    <VStack alignItems="flex-start" w="full" spacing={3}>
      <HeroImage />

      <Heading as="h1" size="lg">
        {`🙋🏻‍♂️ Hi, I'm ${siteConfig.baseTitle}!`}
      </Heading>
      <Text as="h2" lineHeight="175%">
        <Prose>
          <MDXRenderer {...props.contents} />
        </Prose>
      </Text>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>
        {socialNetworks.slice(0, 3).map(({ href, label }) => (
          <Button
            key={href}
            as={Link}
            justifyContent={{ base: 'flex-start', md: 'center' }}
            px={4}
            color={label.toLowerCase()}
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
  );
};

export default Hero;
