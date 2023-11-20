import { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes, forwardRef } from 'react';

import { classNames } from 'utils/styles';

const Root = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto whitespace-nowrap rounded-md border">
    <table ref={ref} className={classNames('w-full caption-bottom text-sm', className)} {...props} />
  </div>
));

Root.displayName = 'Table-Root';

const Header = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <thead ref={ref} className={classNames('[&_tr]:border-b', className)} {...props} />
);

Header.displayName = 'Table-Header';

const Body = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={classNames('[&_tr:last-child]:border-0', className)} {...props} />
  )
);

Body.displayName = 'Table-Body';

const Row = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={classNames('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', className)}
    {...props}
  />
));

Row.displayName = 'Table-Row';

const Head = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={classNames(
        'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
        className
      )}
      {...props}
    />
  )
);

Head.displayName = 'Table-Head';

const Cell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={classNames('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)} {...props} />
  )
);

Cell.displayName = 'Table-Cell';

export default { Root, Header, Body, Head, Row, Cell };
