import { FunctionComponent, PropsWithChildren } from 'react';

/*~
 * COMPONENT
 */

export const SectionList: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  return <ul className="grid grid-cols-1 gap-10 py-8 dark:border-gray-700 md:grid-cols-2">{children}</ul>;
};

export default SectionList;
