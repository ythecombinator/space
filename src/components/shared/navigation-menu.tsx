import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { FunctionComponent, PropsWithChildren } from 'react';

import NavigationMenuControlLink from 'components/shared/navigation-menu-control-link';
import { classNames } from 'utils/styles';

/*~
 * TYPES
 */

interface NavigationMenuProps {
  items: Array<{ href: string; title: string }>;
}

/*~
 * COMPONENT
 */

export const NavigationMenu: FunctionComponent<
  PropsWithChildren<NavigationMenuProps>
> = ({ items }) => {
  return (
    <NavigationMenuPrimitive.Root className="relative">
      <NavigationMenuPrimitive.List className="flex flex-row p-2 space-x-2">
        {items.map((link) => (
          <NavigationMenuPrimitive.Item key={link.href}>
            <NavigationMenuControlLink
              href={link.href}
              className="link-underline dark:link-underline-black rounded-xl p-1 font-medium text-gray-900 hover:bg-gray-400/10 dark:text-gray-100 sm:p-4"
            >
              {link.title}
            </NavigationMenuControlLink>
          </NavigationMenuPrimitive.Item>
        ))}

        <NavigationMenuPrimitive.Indicator
          className={classNames(
            'z-10',
            'top-[100%] flex items-end justify-center h-2 overflow-hidden',
            'radix-state-visible:animate-fade-in',
            'radix-state-hidden:animate-fade-out',
            'transition-[width_transform] duration-[250ms] ease-[ease]'
          )}
        >
          <div className="top-1 relative bg-white dark:bg-gray-800 w-2 h-2 rotate-45" />
        </NavigationMenuPrimitive.Indicator>
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
};

export default NavigationMenu;
