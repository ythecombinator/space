import Image from 'next/image';
import { FunctionComponent } from 'react';

import Link from 'components/shared/link';

/*~
 * TYPES
 */

export type InventoryItem = {
  image: string;
  name: string;
  description: string;
  url: string;
};

export type InventoryProps = {
  items: Array<InventoryItem>;
};

/*~
 * COMPONENT
 */

const Inventory: FunctionComponent<InventoryProps> = ({ items }) => {
  return (
    <div className="mt-8 mb-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-6 rounded-lg border p-4 no-underline transition-colors duration-150 hover:bg-accent sm:flex-col sm:gap-3"
        >
          <Image src={item.image} width={256} height={256} alt={item.name} className="shrink-0" />
          <div className="flex flex-col justify-center gap-2">
            <div className="text-lg font-extrabold">{item.name}</div>
            <div className="text-sm text-muted-foreground">{item.description}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Inventory;
