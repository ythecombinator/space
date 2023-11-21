import { FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react';

/*~
 * COMPONENT
 */

const Lead: FunctionComponent<PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>> = ({ children, ...props }) => {
  return (
    <p className="text-xl font-semibold leading-8 tracking-tight" {...props}>
      {children}
    </p>
  );
};

export default Lead;
