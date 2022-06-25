import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

export type HeaderMobileNavigationLinkProps = PropsWithChildren<{
  href: string;
}>;

const HeaderMobileNavigationLink = (props: HeaderMobileNavigationLinkProps) => {
  const { href, children } = props;

  return (
    <NextLink href={href} passHref>
      <Button as="a" width="full" variant="ghost">
        {children}
      </Button>
    </NextLink>
  );
};

export default HeaderMobileNavigationLink;
