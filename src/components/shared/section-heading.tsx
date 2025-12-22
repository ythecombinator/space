import { FunctionComponent, PropsWithChildren } from 'react';

import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface SectionHeadingProps {
  title: string;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

export function SectionHeading({ title }: PropsWithChildren<SectionHeadingProps>) {
  return <Typography.h2>{title}</Typography.h2>;
}

export default SectionHeading;
