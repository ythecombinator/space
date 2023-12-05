import { FunctionComponent } from 'react';

import Image from 'components/shared/image';
import Link from 'components/shared/link';
import Typography from 'components/shared/typography';

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
          className="flex flex-col gap-6 rounded-lg border p-4 transition-colors duration-150 hover:bg-accent sm:gap-3"
          clearDecoration
        >
          <Image src={item.image} width={256} height={256} alt={item.name} containerClassName="flex justify-center" />
          <div className="flex flex-col justify-center gap-2">
            <Typography.lead>{item.name}</Typography.lead>
            <Typography.subtle>{item.description}</Typography.subtle>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Inventory;
