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
  const title = (
    <Typography.h1
      className={classNames({
        [`text-transparent bg-clip-text bg-gradient-to-r ${gradients[gradient as Gradient]}`]: gradient,
      })}
    >
      {children}
    </Typography.h1>
  );

  if (!transitionKey) {
    return title;
  }

  return (
    <span className="block" style={viewTransitionStyle(transitionKey)}>
      {title}
    </span>
  );
}

export default PageTitle;
