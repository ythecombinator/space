import { FunctionComponent, PropsWithChildren } from 'react';

/*~
 * TYPES
 */

export type CardOutlinedListItemProps = {
  icon: JSX.Element;
};

/*~
 * COMPONENT
 */

const CardOutlinedListItem: FunctionComponent<PropsWithChildren<CardOutlinedListItemProps>> = ({ icon, children }) => {
  return (
    <div className="flex items-center text-gray-800 dark:text-gray-200">
      <div className="mr-2 flex h-10 items-center justify-center bg-transparent text-lg">{icon}</div>
      {children}
    </div>
  );
};

export default CardOutlinedListItem;
