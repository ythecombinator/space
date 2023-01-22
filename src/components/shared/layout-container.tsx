import { FunctionComponent } from 'react';

/*~
 * COMPONENT
 */

const LayoutContainer: FunctionComponent = ({ children }) => {
  return (
    <div className="max-w-2xl px-4 mx-auto my-auto sm:px-6 xl:max-w-2xl xl:px-0">
      {children}
    </div>
  );
};

export default LayoutContainer;
