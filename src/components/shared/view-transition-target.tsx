import { createElement, CSSProperties, type JSX, PropsWithChildren } from 'react';

import { classNames } from 'utils/styles';
import { viewTransitionProps } from 'utils/view-transition';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type ViewTransitionTargetProps = {
  /** Full view-transition-name, typically from vtKeys */
  name?: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
};

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
      className: classNames(className) || undefined,
      style,
      ...viewTransitionProps(name),
    },
    children
  );
}

export default ViewTransitionTarget;
