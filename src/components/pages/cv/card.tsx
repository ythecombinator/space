import { HTMLAttributes, forwardRef } from 'react';

import { classNames } from 'utils/styles';

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const CardRoot = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={classNames('rounded-lg bg-card text-card-foreground', className)} {...props} />
));
CardRoot.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={classNames('flex flex-col space-y-1.5', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={classNames('text-pretty font-mono text-sm text-muted-foreground', className)} {...props} />
));
CardContent.displayName = 'CardContent';

export default {
  Root: CardRoot,
  Header: CardHeader,
  Content: CardContent,
};
