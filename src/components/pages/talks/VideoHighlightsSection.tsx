import { FC, useMemo } from 'react';

import SectionContainer from 'components/shared/SectionContainer';
import SectionHeading from 'components/shared/SectionHeading';

import VideoHighlightsItem, {
  VideoHighlightsItemProps,
} from './VideoHighlightsItem';

/*~
 * TYPES
 */

export type VideoHighlightsSectionProps = {
  items: Array<VideoHighlightsItemProps>;
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
          <VideoHighlightsItem
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
