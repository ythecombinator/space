import { FunctionComponent, PropsWithChildren } from 'react';

import { FeaturedTalk } from 'services/content/talks';

import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';

import PhotoHighlightsSectionItem from 'components/pages/talks/photo-highlights-section-item';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type PhotoHighlightsSectionProps = {
  items: Array<FeaturedTalk>;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const PhotoHighlightsSection: FunctionComponent<PropsWithChildren<PhotoHighlightsSectionProps>> = ({ items }) => {
  return (
    <SectionContainer>
      <SectionHeading title="Captured Highlights" />
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item) => (
            <PhotoHighlightsSectionItem key={`${item.talkSlug}-${item.eventName}`} {...item} />
          ))}
        </div>{' '}
      </div>
    </SectionContainer>
  );
};

export default PhotoHighlightsSection;
