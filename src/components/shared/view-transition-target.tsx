import { createElement, PropsWithChildren } from 'react';

import { classNames } from 'utils/styles';
import { ViewTransitionTargetProps, viewTransitionStyle } from 'utils/view-transition';

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function ViewTransitionTarget({
  name,
  as: Tag = 'span',
  className,
  children,
  style,
}: PropsWithChildren<ViewTransitionTargetProps>) {
  return createElement(
    Tag,
    {
      className: classNames(className),
      style: { ...viewTransitionStyle(name), ...style },
    },
    children
  );
}

export default ViewTransitionTarget;
