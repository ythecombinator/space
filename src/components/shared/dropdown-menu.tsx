import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React, { FunctionComponent, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

import fonts from 'utils/fonts';
import { classNames } from 'utils/styles';

import Button from 'components/shared/button';

import Typography from './typography';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface DropdownMenuProps {
  label: string;
  items: Array<{ label: string; id: string }>;
  initialSelectedItem?: string;
  onSelect: (id: string) => void;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const DropdownMenu: FunctionComponent<DropdownMenuProps> = (props) => {
  const { label, items, initialSelectedItem, onSelect } = props;
  const [currentItem, setCurrentItem] = useState<string>(initialSelectedItem ?? '');

  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <Button variant="outline">Filter</Button>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="end"
            sideOffset={5}
            className={classNames(
              'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
              'w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56',
              'bg-white dark:bg-gray-800',
              fonts.biotify
            )}
          >
            <DropdownMenuPrimitive.Label className="select-none px-2 py-2 text-xs text-gray-700 dark:text-gray-200">
              <Typography.subtle>{label}</Typography.subtle>
            </DropdownMenuPrimitive.Label>

            {items.map((item) => {
              return (
                <DropdownMenuPrimitive.CheckboxItem
                  key={item.id}
                  checked={currentItem === item.id}
                  onCheckedChange={(state) => {
                    if (state) {
                      setCurrentItem(item.id);
                      onSelect(item.id);
                    }
                  }}
                  className={classNames(
                    'flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none',
                    'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900'
                  )}
                >
                  <Typography.small className="flex-grow text-gray-700 dark:text-gray-300">
                    {item.label}
                  </Typography.small>
                  <DropdownMenuPrimitive.ItemIndicator>
                    <FaCheck className="h-3.5 w-3.5" />
                  </DropdownMenuPrimitive.ItemIndicator>
                </DropdownMenuPrimitive.CheckboxItem>
              );
            })}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export default DropdownMenu;
