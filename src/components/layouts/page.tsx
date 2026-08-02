import { useRouter } from 'next/router';
import { FunctionComponent, PropsWithChildren } from 'react';

import { shouldBreadcrumbsRender, toBreadcrumbs } from 'utils/string';
import { normalizePath } from 'utils/view-transition';

import Breadcrumbs from 'components/shared/breadcrumbs';
import PageTitle, { PageTitleProps } from 'components/shared/page-title';
import ViewTransitionTarget from 'components/shared/view-transition-target';

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
  const breadcrumbs = toBreadcrumbs(normalizePath(asPath));

  return (
    <div className="mt-6 px-2 sm:px-0">
      {shouldBreadcrumbsRender(breadcrumbs) && <Breadcrumbs items={breadcrumbs} />}
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <ViewTransitionTarget as="div" name={headingShellTransitionKey} className="rounded-lg">
          <PageTitle gradient={headingGradient} transitionKey={headingTransitionKey}>
            {heading}
          </PageTitle>
        </ViewTransitionTarget>
        {subHeading}
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
