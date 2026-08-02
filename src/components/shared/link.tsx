import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { AnchorHTMLAttributes, CSSProperties, FunctionComponent, PropsWithChildren, Ref } from 'react';

import { isAnchorLink, isInternalLink } from 'utils/link';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type LinkProps = Omit<NextLinkProps, 'href'> & {
  href: string;
  ref?: Ref<HTMLAnchorElement>;
  clearDecoration?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps | 'href'>;

//  ---------------------------------------------------------------------------
//  UI — navigation VT is handled globally in ViewTransitionProvider (capture)
//  ---------------------------------------------------------------------------

const Link: FunctionComponent<PropsWithChildren<LinkProps>> = ({
  href,
  children,
  clearDecoration = false,
  shallow,
  replace,
  scroll,
  prefetch,
  locale,
  onClick,
  target,
  ...rest
}) => {
  const style: CSSProperties = {
    ...(clearDecoration ? { textDecoration: 'none' } : {}),
    ...rest.style,
  };

  if (isInternalLink(href)) {
    return (
      <NextLink
        href={href}
        shallow={shallow}
        replace={replace}
        scroll={scroll ?? false}
        prefetch={prefetch}
        locale={locale}
        onClick={onClick}
        target={target}
        {...rest}
        style={style}
      >
        {children}
      </NextLink>
    );
  }

  if (isAnchorLink(href)) {
    return (
      <a href={href} onClick={onClick} target={target} {...rest} style={style}>
        {children}
      </a>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} onClick={onClick} {...rest} style={style}>
      {children}
    </a>
  );
};

export default Link;
