import { cva } from 'class-variance-authority';
import { DetailsHTMLAttributes, HTMLAttributes, PropsWithChildren } from 'react';

import { classNames } from 'utils/styles';

import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

const severity = {
  info: 'bg-blue-50 border-blue-500 dark:bg-blue-900/30',
  success: 'bg-teal-50 border-teal-500 dark:bg-teal-800/30',
  warning: 'bg-yellow-50 border-yellow-500 dark:bg-yellow-800/30',
  error: 'bg-red-50 border-red-500 dark:bg-red-800/30',
};

const variants = cva('rounded-lg border-t-2 p-4', {
  variants: { severity: severity },
});

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface Props extends Pick<DetailsHTMLAttributes<HTMLDetailsElement>, 'className' | 'open'> {
  severity?: keyof typeof severity;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function Box({ className, severity = 'info', open, children }: PropsWithChildren<Props>) {
  return (
    <details className={classNames(variants({ severity }), className)} open={open}>
      {children}
    </details>
  );
}

function Title({ className, children }: PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <summary className={classNames('text-gray-800 font-semibold dark:text-white cursor-pointer ms-3', className)}>
      <Typography.h3 className="inline">{children}</Typography.h3>
    </summary>
  );
}

function Description({ className, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <div className={classNames('text-gray-700 dark:text-gray-400 mt-2 ms-3', className)} {...props} />;
}

export default { Box, Title, Description };
