import { PropsWithChildren } from 'react';

import { classNames, Gradient, gradients } from 'utils/styles';

import Typography from 'components/shared/typography';
import ViewTransitionTarget from 'components/shared/view-transition-target';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export interface PageTitleProps {
  gradient?: Gradient;
  /** Full view-transition-name, typically from vtKeys */
  transitionKey?: string;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function PageTitle({ gradient, transitionKey, children }: PropsWithChildren<PageTitleProps>) {
  return (
    <Typography.h1
      className={classNames({
        [`text-transparent bg-clip-text bg-gradient-to-r ${gradients[gradient as Gradient]}`]: gradient,
      })}
    >
      <ViewTransitionTarget name={transitionKey}>
        {children}
      </ViewTransitionTarget>
    </Typography.h1>
  );
}

export default PageTitle;
