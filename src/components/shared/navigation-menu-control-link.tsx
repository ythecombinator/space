import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { NavigationMenuLinkProps } from '@radix-ui/react-navigation-menu';
import Link, { LinkProps } from 'next/link';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';

/*~
 * TYPES
 */

type NavigationMenuControlLinkProps = LinkProps &
  Pick<NavigationMenuLinkProps, 'className'>;

/*~
 * COMPONENT
 */

export const NavigationMenuControlLink = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Link>,
  PropsWithChildren<NavigationMenuControlLinkProps>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Link asChild className={className} ref={ref}>
    <Link shallow {...props}>
      {children}
    </Link>
  </NavigationMenuPrimitive.Link>
));

NavigationMenuControlLink.displayName = 'NavigationMenuControlLink';

export default NavigationMenuControlLink;
