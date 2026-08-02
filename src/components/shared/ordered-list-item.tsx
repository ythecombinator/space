import { PropsWithChildren, ReactNode } from 'react';

import { viewTransitionStyle, vtKeys } from 'utils/view-transition';

import Link from 'components/shared/link';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type OrderedListItemProps = {
  href: string;
  label: string;
  index: number;
  prefix?: ReactNode;
  /** Talk slug or href used to build shared-element transition names */
  talkSlug?: string;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function OrderedListItem(props: PropsWithChildren<OrderedListItemProps>) {
  const { label, href, index, prefix, talkSlug = href } = props;

  return (
    <Link href={href} className="w-full" aria-label={label}>
      <div
        className="w-full border-b border-gray-200 py-3 transition-all hover:scale-[1.01] dark:border-gray-700"
        style={viewTransitionStyle(vtKeys.talkCard(talkSlug))}
      >
        <div className="flex flex-col justify-between sm:flex-row sm:items-center">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <div className="mr-6 text-left text-gray-300 dark:text-gray-400 mb-2">{index}</div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-0">
              {prefix}
              <h3
                className="w-full text-base font-medium text-gray-800 dark:text-gray-100 sm:text-lg"
                style={viewTransitionStyle(vtKeys.talkTitle(talkSlug), { contain: false })}
              >
                {label}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default OrderedListItem;
