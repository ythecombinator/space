import { createElement, CSSProperties, type JSX, PropsWithChildren } from 'react';

import { viewTransitionProps } from 'utils/view-transition';

export type ViewTransitionTargetProps = {
  name?: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
};

function ViewTransitionTarget({
  name,
  as: Tag = 'span',
  className,
  children,
  style,
}: PropsWithChildren<ViewTransitionTargetProps>) {
  return createElement(Tag, { className: className || undefined, style, ...viewTransitionProps(name) }, children);
}

export default ViewTransitionTarget;
