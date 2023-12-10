import { FunctionComponent } from 'react';

import Link from 'components/shared/link';

/*~
 * TYPES
 */

interface BadgeProps {
  href: string;
  label: string;
  avatar: string;
}

/*~
 * COMPONENT
 */

const Badge: FunctionComponent<BadgeProps> = ({ label, avatar, href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-2 m-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline max-h-7"
      clearDecoration
    >
      <img alt={`${label} logomark`} src={avatar} className="mr-1" width="15" height="15" />
      {label}
    </Link>
  );
};

export default Badge;
