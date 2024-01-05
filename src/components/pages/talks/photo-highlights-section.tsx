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
      <div className="my-8 columns-2 gap-4 sm:columns-3">
        <div className="relative mb-4 h-40">
          {items.map((item) => (
            <PhotoHighlightsSectionItem key={`${item.talkSlug}-${item.eventName}`} {...item} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default PhotoHighlightsSection;
