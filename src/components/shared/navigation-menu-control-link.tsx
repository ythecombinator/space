import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { NavigationMenuLinkProps } from '@radix-ui/react-navigation-menu';
import Link, { LinkProps } from 'next/link';
import { FC } from 'react';

/*~
 * TYPES
 */

type NavigationMenuControlLinkProps = LinkProps &
  Pick<NavigationMenuLinkProps, 'className'>;

/*~
 * COMPONENT
 */

export const NavigationMenuControlLink: FC<NavigationMenuControlLinkProps> = ({
  children,
  className,
  ...props
}) => (
  <Link shallow {...props} passHref>
    <NavigationMenuPrimitive.Link className={className}>
      {children}
    </NavigationMenuPrimitive.Link>
  </Link>
);

export default NavigationMenuControlLink;
