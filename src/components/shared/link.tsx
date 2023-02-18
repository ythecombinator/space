import NextLink from 'next/link';
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  PropsWithChildren,
} from 'react';

import { isAnchorLink, isInternalLink } from 'utils/link';

/*~
 * TYPES
 */

export type LinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href: string;
};

/*~
 * COMPONENT
 */

const Link: FunctionComponent<PropsWithChildren<LinkProps>> = ({
  href,
  ...rest
}) => {
  if (isInternalLink(href)) {
    return <NextLink href={href} {...rest} />;
  }

  if (isAnchorLink(href)) {
    return <a href={href} {...rest} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default Link;
