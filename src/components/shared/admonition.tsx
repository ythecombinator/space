import { cva } from 'class-variance-authority';
import { FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimesCircle } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

import { classNames } from 'utils/styles';

import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

const severity = {
  info: 'text-blue-800 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800',
  success: 'text-green-800 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800',
  warning:
    'text-yellow-800 border-yellow-300 bg-yellow-50 dark:text-yellow-300 dark:bg-gray-800 dark:border-yellow-800',
  error: 'text-red-800 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800',
};

const variants = cva('mb-4 flex items-start border-t-4 p-4', {
  variants: {
    severity,
  },
  defaultVariants: {
    severity: 'info',
  },
});

const icons: Record<keyof typeof severity, IconType> = {
  info: FaInfoCircle,
  success: FaCheckCircle,
  warning: FaExclamationCircle,
  error: FaTimesCircle,
};

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface AdmonitionBoxProps extends Pick<HTMLAttributes<HTMLDivElement>, 'className'> {
  icon?: IconType;
  severity?: keyof typeof severity;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const AdmonitionBox: FunctionComponent<PropsWithChildren<AdmonitionBoxProps>> = ({
  className,
  severity = 'info',
  icon,
  ...props
}) => {
  const Icon = icon ?? icons[severity];

  return (
    <div className={classNames(variants({ severity }), className)} role="alert">
      <Icon size={32} />
      <div className="ms-3 text-sm font-medium" {...props} />
    </div>
  );
};

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
