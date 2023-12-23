import { usePathname } from 'next/navigation';
import { FunctionComponent, PropsWithChildren } from 'react';

import { shouldBreadcrumbsRender, toBreadcrumbs } from 'utils/string';

import Breadcrumbs from 'components/shared/breadcrumbs';
import PageTitle, { PageTitleProps } from 'components/shared/page-title';

/*~
 * TYPES
 */

interface PageLayoutProps {
  heading: string;
  headingGradient?: PageTitleProps['gradient'];
  subHeading?: JSX.Element;
}

/*~
 * LAYOUT
 */

const PageLayout: FunctionComponent<PropsWithChildren<PageLayoutProps>> = ({
  heading,
  subHeading,
  headingGradient,
  children,
}) => {
  const pathname = usePathname();
  const breadcrumbs = toBreadcrumbs(pathname);

  return (
    <div className="mt-6 px-2 sm:px-0">
      {shouldBreadcrumbsRender(breadcrumbs) && <Breadcrumbs items={breadcrumbs} />}
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <PageTitle gradient={headingGradient}>{heading}</PageTitle>
        {subHeading}
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
