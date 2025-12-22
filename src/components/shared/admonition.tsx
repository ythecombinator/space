import { cva } from 'class-variance-authority';
import { HTMLAttributes, PropsWithChildren } from 'react';

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

const variants = cva('flex rounded-lg border-t-2 p-4', {
  variants: { severity: severity },
});

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface Props extends Pick<HTMLAttributes<HTMLDivElement>, 'className'> {
  severity?: keyof typeof severity;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function Box({ className, severity = 'info', children }: PropsWithChildren<Props>) {
  return (
    <div className={classNames(variants({ severity }), className)} role="alert">
      <div className="ms-3">{children}</div>
    </div>
  );
}

function Title({ className, children }: PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <Typography.h3 className={classNames('text-gray-800 font-semibold dark:text-white mt-2', className)}>
      {children}
    </Typography.h3>
  );
}

function Description({ className, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <div className={classNames('text-gray-700 dark:text-gray-400', className)} {...props} />;
}

export default { Box, Title, Description };
