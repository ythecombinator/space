import { FunctionComponent, PropsWithChildren } from 'react';

/*~
 * COMPONENT
 */

const LayoutContainer: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div className="m-auto max-w-2xl px-4 sm:px-6 xl:max-w-2xl xl:px-0">
      {children}
    </div>
  );
};

export default LayoutContainer;
