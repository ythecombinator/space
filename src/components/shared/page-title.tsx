import { FunctionComponent, PropsWithChildren } from 'react';

import { classNames, Gradient, gradients } from 'utils/styles';

import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export interface PageTitleProps {
  gradient?: Gradient;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const PageTitle: FunctionComponent<PropsWithChildren<PageTitleProps>> = ({ gradient, children }) => {
  return (
    <Typography.h1
      className={classNames({
        [`text-transparent bg-clip-text bg-gradient-to-r ${gradients[gradient as Gradient]}`]: gradient,
      })}
    >
      {children}
    </Typography.h1>
  );
};

export default PageTitle;
