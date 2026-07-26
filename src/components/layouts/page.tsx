import { useRouter } from 'next/router';
import { FunctionComponent, PropsWithChildren } from 'react';

import { shouldBreadcrumbsRender, toBreadcrumbs } from 'utils/string';
import { viewTransitionStyle } from 'utils/view-transition';

import Breadcrumbs from 'components/shared/breadcrumbs';
import PageTitle, { PageTitleProps } from 'components/shared/page-title';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface PageLayoutProps {
  heading: string;
  headingGradient?: PageTitleProps['gradient'];
  headingTransitionKey?: PageTitleProps['transitionKey'];
  headingShellTransitionKey?: string;
  subHeading?: React.JSX.Element;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const PageLayout: FunctionComponent<PropsWithChildren<PageLayoutProps>> = ({
  heading,
  subHeading,
  headingGradient,
  headingTransitionKey,
  headingShellTransitionKey,
  children,
}) => {
  const { asPath } = useRouter();
  const pathname = asPath.split('?')[0].split('#')[0];
  const breadcrumbs = toBreadcrumbs(pathname);

  return (
    <div className="mt-6 px-2 sm:px-0">
      {shouldBreadcrumbsRender(breadcrumbs) && <Breadcrumbs items={breadcrumbs} />}
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <div className="rounded-lg" style={viewTransitionStyle(headingShellTransitionKey)}>
          <PageTitle gradient={headingGradient} transitionKey={headingTransitionKey}>
            {heading}
          </PageTitle>
        </div>
        {subHeading}
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
