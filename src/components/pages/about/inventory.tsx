import { FunctionComponent, useId } from 'react';

import Typography from 'components/shared/typography';

import Item from 'components/pages/about/inventory-item';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type InventoryItem = {
  image: string;
  name: string;
  description: string;
  url: string;
};

export type InventoryProps = {
  title: string;
  items: Array<InventoryItem>;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const Inventory: FunctionComponent<InventoryProps> = ({ title, items }) => {
  let id = useId();

  return (
    <section aria-labelledby={id} className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <Typography.h2 id={id} className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          {title}
        </Typography.h2>
        <div className="md:col-span-3">
          <ul className="space-y-16">
            {items.map((item) => (
              <Item key={item.name}>
                <Item.Title href={item.url}>{item.name}</Item.Title>
                <Item.Description>{item.description}</Item.Description>
              </Item>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Inventory;
