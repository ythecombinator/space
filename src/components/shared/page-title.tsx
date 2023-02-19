import { FunctionComponent, PropsWithChildren } from 'react';

import { classNames, useRandomGradient } from 'utils/styles';

import Typography from 'components/shared/typography';

/*~
 * TYPES
 */

interface PageTitleProps {
  gradient?: boolean;
}

/*~
 * COMPONENT
 */

const PageTitle: FunctionComponent<PropsWithChildren<PageTitleProps>> = ({
  gradient = false,
  children,
}) => {
  const gradientClassName = useRandomGradient();

  return (
    <Typography.h1
      className={classNames({
        [`text-transparent bg-clip-text bg-gradient-to-r ${gradientClassName}`]:
          gradient,
      })}
    >
      {children}
    </Typography.h1>
  );
};

export default PageTitle;
