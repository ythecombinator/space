import { FC, useMemo } from 'react';

import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';

import VideoHighlightsSectionItem, {
  VideoHighlightsSectionItemProps,
} from 'components/pages/talks/video-highlights-section-item';

/*~
 * TYPES
 */

export type VideoHighlightsSectionProps = {
  items: Array<VideoHighlightsSectionItemProps>;
};

/*~
 * COMPONENT
 */

const VideoHighlightsSection: FC<VideoHighlightsSectionProps> = (props) => {
  const allItems = props.items;
  const items = useMemo(() => allItems.slice(0, 2), []);

  return (
    <SectionContainer>
      <SectionHeading title="📺 YouTube Highlights" />
      <div className="pb-2 w-full flex flex-wrap">
        {items.map((item) => (
          <VideoHighlightsSectionItem
            key={item.talkTitle}
            talkTitle={item.talkTitle}
            eventName={item.eventName}
            talkSlug={item.talkSlug}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default VideoHighlightsSection;
