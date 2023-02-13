import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { NavigationMenuLinkProps } from '@radix-ui/react-navigation-menu';
import Link, { LinkProps } from 'next/link';
import { forwardRef, FunctionComponent } from 'react';

/*~
 * TYPES
 */

type NavigationMenuControlLinkProps = LinkProps &
  Pick<NavigationMenuLinkProps, 'className'>;

/*~
 * COMPONENT
 */

export const NavigationMenuControlLink = forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Link asChild className={className} ref={ref}>
    <Link shallow {...props}>
      {children}
    </Link>
  </NavigationMenuPrimitive.Link>
));

export default NavigationMenuControlLink;
