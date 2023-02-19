import { FunctionComponent, PropsWithChildren } from 'react';

import PageTitle from 'components/shared/page-title';

/*~
 * TYPES
 */

interface PageLayoutProps {
  heading: string;
  headingGradientMask?: boolean;
  subHeading?: JSX.Element;
}

/*~
 * LAYOUT
 */

const PageLayout: FunctionComponent<PropsWithChildren<PageLayoutProps>> = ({
  heading,
  headingGradientMask = false,
  subHeading,
  children,
}) => {
  return (
    <div className="mt-6 px-2 sm:px-0">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <PageTitle gradient={headingGradientMask}>{heading}</PageTitle>
        {subHeading}
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
