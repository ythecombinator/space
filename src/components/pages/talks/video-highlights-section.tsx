import { FunctionComponent, PropsWithChildren, useMemo } from 'react';

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

const VideoHighlightsSection: FunctionComponent<
  PropsWithChildren<VideoHighlightsSectionProps>
> = (props) => {
  const allItems = props.items;
  const items = useMemo(() => allItems.slice(0, 2), []);

  return (
    <SectionContainer>
      <SectionHeading title="📺 YouTube Highlights" />
      <div className="flex w-full flex-wrap pb-2">
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
