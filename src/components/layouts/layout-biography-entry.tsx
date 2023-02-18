import { FunctionComponent } from 'react';

import { BiographyEntry } from 'services/biography-content-service';

import PageTitle from 'components/shared/page-title';
import SectionCover from 'components/shared/section-cover';
import PageSEO from 'components/shared/seo-page';

/*~
 * TYPES
 */

interface BiographyEntryLayoutProps {
  content: BiographyEntry;
}

/*~
 * LAYOUT
 */

const BiographyEntryLayout: FunctionComponent<BiographyEntryLayoutProps> = ({
  children,
  content,
}) => {
  const name = 'Matheus';
  const { title, coverImageUrl, coverImageAltText } = content;

  return (
    <>
      <PageSEO
        title={`Biography - ${name}`}
        description={`Biography me - ${name}`}
      />
      <div className="mt-6 px-2 sm:px-0">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <PageTitle>{title}</PageTitle>
          <SectionCover alt={coverImageAltText} src={coverImageUrl} />
        </div>
        <div className="items-start space-y-2  xl:gap-x-8 xl:space-y-0">
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default BiographyEntryLayout;
