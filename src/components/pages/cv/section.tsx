import { HTMLAttributes } from 'react';

import { classNames } from 'utils/styles';

/*~
 * TYPES
 */

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {}

/*~
 * COMPONENT
 */

function Section({ className, ...props }: BadgeProps) {
  return <section className={classNames('flex min-h-0 flex-col gap-y-3 prose', className)} {...props} />;
}

export default Section;
