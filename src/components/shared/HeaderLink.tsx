import { useColorModeValue, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

export type HeaderLinkProps = PropsWithChildren<{
  href: string;
}>;

const HeaderLink = (props: HeaderLinkProps) => {
  const { href, children } = props;

  const color = useColorModeValue('gray.800', 'white');
  const backgroundColor = useColorModeValue('white', 'gray.800');

  return (
    <NextLink href={href} passHref>
      <Button
        as="a"
        backgroundColor={backgroundColor}
        color="gray.500"
        display="inline-flex"
        alignItems="center"
        fontSize="md"
        _hover={{ color: color }}
        _focus={{ boxShadow: 'none' }}
      >
        {children}
      </Button>
    </NextLink>
  );
};

export default HeaderLink;
