import { FunctionComponent, PropsWithChildren } from 'react';

import { Routes } from 'config/constants';

import Chip from 'components/shared/chip';
import Link from 'components/shared/link';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type OrderedListItemProps = {
  href: string;
  label: string;
  index: number;
  prefix?: string | null;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const OrderedListItem: FunctionComponent<PropsWithChildren<OrderedListItemProps>> = (props) => {
  const { label, href, index, prefix } = props;

  return (
    <Link href={href} className="w-full" aria-label={label}>
      <div className="w-full border-b border-gray-200 py-3 transition-all hover:scale-[1.01] dark:border-gray-700">
        <div className="flex flex-col justify-between sm:flex-row sm:items-center">
          <div className="flex items-center">
            <div className="mr-6 text-left text-gray-300 dark:text-gray-400">{index}</div>
            {prefix && <Chip>{prefix}</Chip>}
            <h3 className="w-full text-base font-medium text-gray-800 dark:text-gray-100 sm:text-lg">{label}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OrderedListItem;
