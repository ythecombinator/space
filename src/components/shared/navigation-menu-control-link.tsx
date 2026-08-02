import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { NavigationMenuLinkProps } from '@radix-ui/react-navigation-menu';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';

import Link, { LinkProps } from 'components/shared/link';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

type NavigationMenuControlLinkProps = LinkProps & Pick<NavigationMenuLinkProps, 'className'>;

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

export const NavigationMenuControlLink = forwardRef<
  ElementRef<typeof NavigationMenuPrimitive.Link>,
  PropsWithChildren<NavigationMenuControlLinkProps>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Link asChild className={className} ref={ref}>
    <Link {...props}>{children}</Link>
  </NavigationMenuPrimitive.Link>
));

NavigationMenuControlLink.displayName = 'NavigationMenuControlLink';

export default NavigationMenuControlLink;
