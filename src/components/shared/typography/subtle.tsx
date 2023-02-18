import { FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react';

/*~
 * COMPONENT
 */

const Subtle: FunctionComponent<
  PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>
> = ({ children, ...props }) => {
  return (
    <p className="text-sm text-slate-500 dark:text-slate-400" {...props}>
      {children}
    </p>
  );
};

export default Subtle;
