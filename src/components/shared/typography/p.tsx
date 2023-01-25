import { FunctionComponent, HTMLAttributes } from 'react';

import { classNames } from 'utils/styles';

/*~
 * COMPONENT
 */

const P: FunctionComponent<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={classNames(
        'text-lg leading-7 text-gray-500 my-2 dark:text-gray-400',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default P;
