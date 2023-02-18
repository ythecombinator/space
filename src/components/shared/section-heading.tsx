import { FunctionComponent, PropsWithChildren } from 'react';

import Typography from 'components/shared/typography';

/*~
 * TYPES
 */

interface SectionHeadingProps {
  title: string;
}

/*~
 * COMPONENT
 */

export const SectionHeading: FunctionComponent<
  PropsWithChildren<SectionHeadingProps>
> = ({ title }) => {
  return <Typography.h3>{title}</Typography.h3>;
};

export default SectionHeading;
