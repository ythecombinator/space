import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

import { classNames } from 'utils/styles';

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary/80 text-primary-foreground hover:bg-primary/60',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60',
        destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={classNames(badgeVariants({ variant }), className)} {...props} />;
}

export default Badge;
