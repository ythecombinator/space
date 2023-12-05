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

export const SectionHeading: FunctionComponent<PropsWithChildren<SectionHeadingProps>> = ({ title }) => {
  return <Typography.h2>{title}</Typography.h2>;
};

export default SectionHeading;
