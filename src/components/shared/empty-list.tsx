import { FunctionComponent, PropsWithChildren } from 'react';

import Typography from 'components/shared/typography';

/*~
 * TYPES
 */

interface EmptyListProps {
  heading: string;
  subHeading: string;
}

/*~
 * COMPONENT
 */

export const EmptyList: FunctionComponent<
  PropsWithChildren<EmptyListProps>
> = ({ heading, subHeading }) => {
  return (
    <div className="w-full grid place-items-center rounded-xl border border-dashed border-gray-400 p-8 text-center">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        {heading}
      </h1>
      <Typography.p>{subHeading}</Typography.p>
    </div>
  );
};

export default EmptyList;
