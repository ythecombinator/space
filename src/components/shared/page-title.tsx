import { FunctionComponent, PropsWithChildren } from 'react';

import Typography from 'components/shared/typography';

/*~
 * COMPONENT
 */

const PageTitle: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  return <Typography.h1>{children}</Typography.h1>;
};

export default PageTitle;
