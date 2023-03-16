import { FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react';

import fonts from 'utils/fonts';
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
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        fonts.neuzeitGrotesk,
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export default H3;
