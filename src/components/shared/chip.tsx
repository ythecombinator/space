import { FunctionComponent, PropsWithChildren } from 'react';

/*~
 * COMPONENT
 */

const Chip: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <span className="no-underline relative inline-block text-sm font-medium text-blue-700 dark:text-blue-300 group mr-4">
      <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-700 dark:bg-blue-300 group-hover:translate-y-0 group-hover:translate-x-0"></span>
      <em className="relative block px-2 py-1 bg-white dark:bg-gray-800 border border-current">{children}</em>
    </span>
  );
};

export default Chip;
