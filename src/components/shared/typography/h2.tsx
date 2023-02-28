import { FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react';

import { classNames } from 'utils/styles';

/*~
 * COMPONENT
 */

const H2: FunctionComponent<
  PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>
> = ({ children, className, ...props }) => {
  return (
    <h2
      className={classNames(
        'font-bold text-2xl md:text-3xl tracking-tight my-4 text-black dark:text-white',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export default H2;
