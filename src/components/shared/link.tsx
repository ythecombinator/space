import NextLink from 'next/link';
import {
  AnchorHTMLAttributes,
  CSSProperties,
  DetailedHTMLProps,
  FunctionComponent,
  PropsWithChildren,
  Ref,
} from 'react';

import { isAnchorLink, isInternalLink } from 'utils/link';

/*~
 * TYPES
 */

export type LinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
  href: string;
  ref?: Ref<HTMLAnchorElement>;
  clearDecoration?: boolean;
};

/*~
 * COMPONENT
 */

const Link: FunctionComponent<PropsWithChildren<LinkProps>> = ({
  href,
  children,
  clearDecoration = false,
  ...rest
}) => {
  const style: CSSProperties = {
    ...(clearDecoration ? { textDecoration: 'none' } : {}),
  };

  if (isInternalLink(href)) {
    return (
      <NextLink href={href} {...rest} style={style}>
        {children}
      </NextLink>
    );
  }

  if (isAnchorLink(href)) {
    return (
      <a href={href} {...rest} style={style}>
        {children}
      </a>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest} style={style}>
      {children}
    </a>
  );
};

export default Link;
