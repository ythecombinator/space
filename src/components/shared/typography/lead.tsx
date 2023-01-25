import { FunctionComponent, HTMLAttributes } from 'react';

/*~
 * COMPONENT
 */

const Lead: FunctionComponent<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  ...props
}) => {
  return (
    <p
      className="text-xl font-semibold leading-8 tracking-tight text-gray-100"
      {...props}
    >
      {children}
    </p>
  );
};

export default Lead;
