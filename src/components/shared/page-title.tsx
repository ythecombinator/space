import { FunctionComponent, PropsWithChildren } from 'react';

import { randomElement } from 'utils/array';
import { classNames, gradients } from 'utils/styles';

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
  const gradientClasses = randomElement(gradients);

  return (
    <Typography.h1
      className={classNames({
        [`text-transparent bg-clip-text bg-gradient-to-r ${gradientClasses}`]:
          gradient,
      })}
    >
      {children}
    </Typography.h1>
  );
};

export default PageTitle;
