import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { NavigationMenuLinkProps } from '@radix-ui/react-navigation-menu';
import Link, { LinkProps } from 'next/link';
import { FunctionComponent } from 'react';

/*~
 * TYPES
 */

type NavigationMenuControlLinkProps = LinkProps &
  Pick<NavigationMenuLinkProps, 'className'>;

/*~
 * COMPONENT
 */

export const NavigationMenuControlLink: FunctionComponent<
  NavigationMenuControlLinkProps
> = ({ children, className, ...props }) => (
  <Link shallow {...props} passHref>
    <NavigationMenuPrimitive.Link className={className}>
      {children}
    </NavigationMenuPrimitive.Link>
  </Link>
);

export default NavigationMenuControlLink;
