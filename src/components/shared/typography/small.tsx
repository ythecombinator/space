import { FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react';

import { classNames } from 'utils/styles';

/*~
 * COMPONENT
 */

const Small: FunctionComponent<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <small className={classNames('text-sm font-medium leading-none', className)} {...props}>
      {children}
    </small>
  );
};

export default Small;
