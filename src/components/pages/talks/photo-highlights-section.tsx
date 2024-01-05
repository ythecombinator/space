import { FunctionComponent, PropsWithChildren } from 'react';

import { useSearch } from 'utils/search';

import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';

import PhotoHighlightsSectionItem, {
  PhotoHighlightsSectionItemProps,
} from 'components/pages/talks/photo-highlights-section-item';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type PhotoHighlightsSectionProps = {
  items: Array<PhotoHighlightsSectionItemProps>;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const PhotoHighlightsSection: FunctionComponent<PropsWithChildren<PhotoHighlightsSectionProps>> = ({ items }) => {
  return (
    <SectionContainer>
      <SectionHeading title="📸 Captured Highlights" />
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          {items.map((item) => (
            <PhotoHighlightsSectionItem key={`${item.talkSlug}-${item.eventName}`} {...item} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default PhotoHighlightsSection;
