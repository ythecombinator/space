import { FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react';

import { classNames } from 'utils/styles';

/*~
 * COMPONENT
 */

const H1: FunctionComponent<
  PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>
> = ({ children, className, ...props }) => {
  return (
    <h1
      className={classNames(
        'text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-6xl',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export default H1;
