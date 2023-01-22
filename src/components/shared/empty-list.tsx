import { FunctionComponent } from 'react';

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

export const EmptyList: FunctionComponent<EmptyListProps> = ({
  heading,
  subHeading,
}) => {
  return (
    <div className="w-full grid place-items-center rounded-xl border border-dashed border-gray-400 p-8 text-center">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        {heading}
      </h1>
      <p className="font-medium leading-7 text-gray-500 my-2 dark:text-gray-400">
        {subHeading}
      </p>
    </div>
  );
};

export default EmptyList;
