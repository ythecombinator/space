import { FunctionComponent, PropsWithChildren } from 'react';

import { BiographyEntry } from 'services/biography-content-service';

import { Gradient } from 'utils/styles';

import PageTitle from 'components/shared/page-title';
import SectionCover from 'components/shared/section-cover';

/*~
 * TYPES
 */

interface BiographyEntryLayoutProps {
  content: BiographyEntry;
}

/*~
 * LAYOUT
 */

const BiographyEntryLayout: FunctionComponent<
  PropsWithChildren<BiographyEntryLayoutProps>
> = ({ children, content }) => {
  const { title, color, cover } = content;

  return (
    <div className="mt-6 px-2 sm:px-0">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <PageTitle gradient={color as Gradient}>{title}</PageTitle>
        <SectionCover alt={title} src={cover} />
      </div>

      <div className="items-start space-y-2  xl:gap-x-8 xl:space-y-0">
        <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BiographyEntryLayout;
