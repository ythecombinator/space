import { FunctionComponent } from 'react';

import Link from 'components/shared/link';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface BadgeProps {
  href: string;
  label: string;
  avatar: string;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const Badge: FunctionComponent<BadgeProps> = ({ label, avatar, href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="m-1 inline-flex max-h-7 items-center rounded border border-neutral-200 bg-neutral-50 p-2 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
      clearDecoration
    >
      <img alt={`${label} logomark`} src={avatar} className="mr-1" width="15" height="15" />
      {label}
    </Link>
  );
};

export default Badge;
