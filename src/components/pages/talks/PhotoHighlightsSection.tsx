import { FC } from 'react';

import SectionContainer from 'components/shared/SectionContainer';
import SectionHeading from 'components/shared/SectionHeading';

import PhotoHighlightsItem, {
  PhotoHighlightsItemProps,
} from './PhotoHighlightsItem';

/*~
 * TYPES
 */

export type PhotoHighlightsSectionProps = {
  items: Array<PhotoHighlightsItemProps>;
};

/*~
 * COMPONENT
 */

const PhotoHighlightsSection: FC<PhotoHighlightsSectionProps> = ({ items }) => {
  return (
    <SectionContainer>
      <SectionHeading title="📸 Captured Highlights" />
      <div className="mx-auto max-w-[1960px] p-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <PhotoHighlightsItem key={item.eventName} {...item} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default PhotoHighlightsSection;
