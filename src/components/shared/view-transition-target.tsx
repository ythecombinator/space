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
  contain,
}: PropsWithChildren<ViewTransitionTargetProps>) {
  return createElement(
    Tag,
    {
      className: classNames(className),
      style: { ...viewTransitionStyle(name, { contain }), ...style },
    },
    children
  );
}

export default ViewTransitionTarget;
