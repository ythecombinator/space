import { FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react';

import { classNames } from 'utils/styles';

/*~
 * COMPONENT
 */

const H3: FunctionComponent<
  PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>
> = ({ children, className, ...props }) => {
  return (
    <h3
      className={classNames(
        'font-bold text-2xl md:text-3xl tracking-tight my-4 text-black dark:text-white',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export default H3;
