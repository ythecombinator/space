import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { forwardRef, FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react';

import { classNames } from 'utils/styles';

import Typography from 'components/shared/typography';

/*~
 * STYLES
 */

const variants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

/*~
 * COMPONENTS
 * Source: https://ui.shadcn.com/docs/components/alert
 */

const AdmonitionBox = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & VariantProps<typeof variants>>(
  ({ className, variant, ...props }, ref) => (
    <div ref={ref} role="alert" className={classNames(variants({ variant }), className)} {...props} />
  )
);

AdmonitionBox.displayName = 'AdmonitionBox';

const AdmonitionTitle: FunctionComponent<PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>> = ({
  className,
  ...props
}) => {
  return <Typography.h3 className={classNames('mt-2 leading-none tracking-tight', className)} {...props} />;
};

const AdmonitionDescription: FunctionComponent<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  className,
  ...props
}) => {
  return <div className={classNames('[&_p]:leading-relaxed my-2', className)} {...props} />;
};

export default { Box: AdmonitionBox, Title: AdmonitionTitle, Description: AdmonitionDescription };
