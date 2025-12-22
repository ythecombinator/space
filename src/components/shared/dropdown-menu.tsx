import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

import fonts from 'utils/fonts';
import { classNames } from 'utils/styles';

import Button from 'components/shared/button';
import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface DropdownMenuProps {
  label: string;
  items: Array<{ label: string; id: string }>;
  initialSelectedItem?: string;
  initialSelectedItems?: string[];
  multiSelect?: boolean;
  onSelect?: (id: string) => void;
  onMultiSelect?: (ids: string[]) => void;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function DropdownMenu(props: DropdownMenuProps) {
  const { label, items, initialSelectedItem, initialSelectedItems, multiSelect, onSelect, onMultiSelect } = props;
  const [currentItem, setCurrentItem] = useState<string>(initialSelectedItem ?? '');
  const [selectedItems, setSelectedItems] = useState<string[]>(initialSelectedItems ?? []);

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
              fonts.karla.className
            )}
          >
            <DropdownMenuPrimitive.Label className="select-none p-2 text-xs text-gray-700 dark:text-gray-200">
              <Typography.subtle>{label}</Typography.subtle>
            </DropdownMenuPrimitive.Label>

            {items.map((item) => {
              const isChecked = multiSelect ? selectedItems.includes(item.id) : currentItem === item.id;

              return (
                <DropdownMenuPrimitive.CheckboxItem
                  key={item.id}
                  checked={isChecked}
                  onCheckedChange={(state) => {
                    if (multiSelect) {
                      const newSelectedItems = state
                        ? [...selectedItems, item.id]
                        : selectedItems.filter((id) => id !== item.id);
                      setSelectedItems(newSelectedItems);
                      onMultiSelect?.(newSelectedItems);
                    } else {
                      if (state) {
                        setCurrentItem(item.id);
                        onSelect?.(item.id);
                      }
                    }
                  }}
                  className={classNames(
                    'flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none',
                    'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900'
                  )}
                >
                  <Typography.small className="grow text-gray-700 dark:text-gray-300">{item.label}</Typography.small>
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
}

export default DropdownMenu;
