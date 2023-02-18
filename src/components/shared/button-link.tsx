import { FunctionComponent, PropsWithChildren } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import { isInternalLink } from 'utils/link';

import Link, { LinkProps } from 'components/shared/link';

/*~
 * TYPES
 */

type ButtonLinkProps = LinkProps & { className?: string; icon: JSX.Element };

/*~
 * COMPONENT
 */

export const ButtonLink: FunctionComponent<
  PropsWithChildren<ButtonLinkProps>
> = ({ children, icon, href }) => (
  <Link
    href={href}
    className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
  >
    <div className="flex items-center">
      {icon}
      <div className="ml-3">{children}</div>
    </div>
    {isInternalLink(href) ? <FaArrowRight /> : <FiExternalLink />}
  </Link>
);

export default ButtonLink;
