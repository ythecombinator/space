import { CSSProperties, ElementType, PropsWithChildren } from 'react';

import { viewTransitionProps } from 'utils/view-transition';

type ViewTransitionTargetProps = {
  name?: string;
  as?: ElementType;
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
  return (
    <Tag className={className || undefined} style={style} {...viewTransitionProps(name)}>
      {children}
    </Tag>
  );
}

export default ViewTransitionTarget;
