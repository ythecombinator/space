import { FunctionComponent, PropsWithChildren } from 'react';

import { useLyraSearch } from 'utils/search';

import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';

import PhotoHighlightsSectionItem, {
  PhotoHighlightsSectionItemProps,
} from 'components/pages/talks/photo-highlights-section-item';

/*~
 * TYPES
 */

export type PhotoHighlightsSectionProps = {
  items: Array<PhotoHighlightsSectionItemProps>;
};

/*~
 * COMPONENT
 */

const PhotoHighlightsSection: FunctionComponent<
  PropsWithChildren<PhotoHighlightsSectionProps>
> = ({ items }) => {
  return (
    <SectionContainer>
      <SectionHeading title="📸 Captured Highlights" />
      <div className="mx-auto max-w-[1960px] p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <PhotoHighlightsSectionItem
              key={`${item.talkSlug}-${item.eventName}`}
              {...item}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default PhotoHighlightsSection;
