import { FunctionComponent } from 'react';

import { classNames } from 'utils/styles';

import Link, { LinkProps } from 'components/shared/link';

/*~
 * COMPONENT
 */

const A: FunctionComponent<LinkProps> = ({ className, href, ...props }) => {
  return <Link className={classNames(className)} target="_blank" rel="noopener noreferrer" href={href} {...props} />;
};

export default A;
