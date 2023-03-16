import { FunctionComponent, PropsWithChildren } from 'react';

import fonts from 'utils/fonts';
import { classNames } from 'utils/styles';

/*~
 * COMPONENT
 */

const LayoutContainer: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div
      className={classNames(
        'm-auto max-w-2xl px-4 sm:px-6 xl:max-w-2xl xl:px-0',
        fonts.biotify
      )}
    >
      {children}
    </div>
  );
};

export default LayoutContainer;
