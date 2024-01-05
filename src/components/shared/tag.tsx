import { FunctionComponent, PropsWithChildren } from 'react';

import { classNames } from 'utils/styles';

import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type TagVariant = 'pink' | 'slate' | 'sky' | 'green' | 'red' | 'orange' | 'gray';

export interface TagProps {
  variant: TagVariant;
}

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

const variantMap: Record<TagVariant, string> = {
  pink: 'text-fuchsia-700 border-pink-300 bg-pink-100 dark:text-fuchsia-300 dark:border-pink-600 dark:bg-pink-900',
  sky: 'text-cyan-700 border-sky-300 bg-sky-100 dark:text-cyan-300 dark:border-sky-600 dark:bg-sky-900',
  green: 'text-lime-700 border-lime-300 bg-lime-100 dark:text-lime-300 dark:border-lime-600 dark:bg-lime-900',
  red: 'text-red-700 border-red-300 bg-red-100 dark:text-red-300 dark:border-red-600 dark:bg-red-900',
  orange:
    'text-amber-700 border-orange-300 bg-orange-100 dark:text-amber-300 dark:border-orange-600 dark:bg-orange-900',
  gray: 'text-slate-700 border-slate-300 bg-white dark:text-slate-300 dark:border-slate-600 dark:bg-gray-900',
  slate: 'text-slate-700 border-slate-300 bg-slate-100 dark:text-slate-300 dark:border-slate-600 dark:bg-slate-900',
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const Tag: FunctionComponent<PropsWithChildren<TagProps>> = ({ variant, children }) => {
  return (
    <div
      className={classNames(
        'flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full border',
        variantMap[variant]
      )}
    >
      <Typography.small>{children}</Typography.small>
    </div>
  );
};

export default Tag;
