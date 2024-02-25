import { PropsWithChildren } from 'react';

import Link, { LinkProps } from 'components/shared/link';
import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const InventoryItemRoot = ({ children }: PropsWithChildren) => {
  return <li className="group relative flex flex-col items-start">{children}</li>;
};

const InventoryItemLink = ({ children, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <>
      <span className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

const InventoryItemTitle = ({ href, children }: PropsWithChildren<{ href: string }>) => {
  return (
    <Typography.h3 className="text-balance mt-2 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      <InventoryItem.Link href={href}>{children}</InventoryItem.Link>
    </Typography.h3>
  );
};

const InventoryItemDescription = ({ children }: PropsWithChildren) => {
  return <Typography.p className="relative z-10 mt-2 text-sm">{children}</Typography.p>;
};

const InventoryItem = Object.assign(InventoryItemRoot, {
  Link: InventoryItemLink,
  Title: InventoryItemTitle,
  Description: InventoryItemDescription,
});

export default InventoryItem;
