import { PropsWithChildren } from 'react';

import { classNames, Gradient, gradients } from 'utils/styles';
import { viewTransitionStyle } from 'utils/view-transition';

import Typography from 'components/shared/typography';

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
      <span style={viewTransitionStyle(transitionKey, { contain: false })}>{children}</span>
    </Typography.h1>
  );
}

export default PageTitle;
