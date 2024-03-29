import { usePathname } from 'next/navigation';
import { FunctionComponent, PropsWithChildren } from 'react';

import { MDXEntry } from 'services/content/markdown';

import { shouldBreadcrumbsRender, toBreadcrumbs } from 'utils/string';
import { Gradient } from 'utils/styles';

import Breadcrumbs from 'components/shared/breadcrumbs';
import PageTitle from 'components/shared/page-title';
import SectionCover from 'components/shared/section-cover';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface MDXEntryLayoutProps {
  content: MDXEntry;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const MDXEntryLayout: FunctionComponent<PropsWithChildren<MDXEntryLayoutProps>> = ({ children, content }) => {
  const { title, color, hero } = content;
  const pathname = usePathname();
  const breadcrumbs = toBreadcrumbs(pathname);

  return (
    <div className="mt-6 px-2 sm:px-0">
      {shouldBreadcrumbsRender(breadcrumbs) && <Breadcrumbs items={breadcrumbs} />}
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <PageTitle gradient={color as Gradient}>{title}</PageTitle>
        <SectionCover alt={title} src={hero} />
      </div>

      <div className="items-start space-y-2  xl:gap-x-8 xl:space-y-0">
        <div className="prose max-w-none py-8 dark:prose-invert xl:col-span-2">{children}</div>
      </div>
    </div>
  );
};

export default MDXEntryLayout;
