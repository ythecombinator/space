import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';
import {
  AnchorHTMLAttributes,
  CSSProperties,
  FunctionComponent,
  MouseEvent,
  PropsWithChildren,
  Ref,
  useCallback,
} from 'react';

import { isAnchorLink, isInternalLink } from 'utils/link';
import { navigateWithViewTransition, skipViewTransitionFromEvent, shouldUseViewTransition } from 'utils/view-transition';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type LinkProps = Omit<NextLinkProps, 'href'> & {
  href: string;
  ref?: Ref<HTMLAnchorElement>;
  clearDecoration?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps | 'href'>;

//  ---------------------------------------------------------------------------
//  UI
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
  const router = useRouter();

  const style: CSSProperties = {
    ...(clearDecoration ? { textDecoration: 'none' } : {}),
    ...rest.style,
  };

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(event);
      if (event.defaultPrevented) return;
      if (!isInternalLink(href) || isAnchorLink(href)) return;
      if (skipViewTransitionFromEvent(event) || target === '_blank') return;
      if (!shouldUseViewTransition()) return;

      event.preventDefault();
      void navigateWithViewTransition(router, href, { shallow, replace, scroll });
    },
    [href, onClick, replace, router, scroll, shallow, target]
  );

  if (isInternalLink(href)) {
    return (
      <NextLink
        href={href}
        shallow={shallow}
        replace={replace}
        scroll={scroll}
        prefetch={prefetch}
        locale={locale}
        onClick={handleClick}
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
