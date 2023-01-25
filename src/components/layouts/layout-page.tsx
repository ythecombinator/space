import { FunctionComponent } from 'react';

import PageTitle from 'components/shared/page-title';

/*~
 * TYPES
 */

interface PageLayoutProps {
  heading: string;
  subHeading?: JSX.Element;
}

/*~
 * LAYOUT
 */

const PageLayout: FunctionComponent<PageLayoutProps> = ({
  heading,
  subHeading,
  children,
}) => {
  return (
    <div className="mt-6 px-2 sm:px-0">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <PageTitle>{heading}</PageTitle>
        {subHeading}
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
