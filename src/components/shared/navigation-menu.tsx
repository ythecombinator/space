import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { FunctionComponent, PropsWithChildren } from 'react';

import { Routes } from 'config/constants';

import { classNames } from 'utils/styles';

import Logo from 'components/shared/logo';
import NavigationMenuControlLink from 'components/shared/navigation-menu-control-link';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface NavigationMenuProps {
  items: Array<{ href: string; title: string }>;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

export const NavigationMenu: FunctionComponent<PropsWithChildren<NavigationMenuProps>> = ({ items }) => {
  return (
    <NavigationMenuPrimitive.Root className="relative">
      <NavigationMenuPrimitive.List className="flex flex-row space-x-2 p-2 items-center">
        <NavigationMenuPrimitive.Item className="mr-4">
          <NavigationMenuControlLink href={Routes.base}>
            <Logo />
          </NavigationMenuControlLink>
        </NavigationMenuPrimitive.Item>

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
          <div className="relative top-1 h-2 w-2 rotate-45 bg-white dark:bg-gray-800" />
        </NavigationMenuPrimitive.Indicator>
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.Root>
  );
};

export default NavigationMenu;
