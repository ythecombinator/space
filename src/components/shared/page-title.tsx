import { FunctionComponent } from 'react';

import Typography from 'components/shared/typography';

/*~
 * COMPONENT
 */

const PageTitle: FunctionComponent = ({ children }) => {
  return <Typography.h1>{children}</Typography.h1>;
};

export default PageTitle;
