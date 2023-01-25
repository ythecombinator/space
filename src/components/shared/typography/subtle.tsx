import { FunctionComponent, HTMLAttributes } from 'react';

/*~
 * COMPONENT
 */

const Subtle: FunctionComponent<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  ...props
}) => {
  return (
    <p className="text-sm text-slate-500 dark:text-slate-400" {...props}>
      {children}
    </p>
  );
};

export default Subtle;
