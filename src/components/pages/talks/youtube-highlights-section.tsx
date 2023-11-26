import { FunctionComponent, PropsWithChildren, useMemo } from 'react';

import { YoutubeHighlight } from 'services/content/talks';

import { ScrollArea, ScrollBar } from 'components/shared/scroll-area';
import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';

import YoutubeHighlightsSectionItem from 'components/pages/talks/youtube-highlights-section-item';

/*~
 * TYPES
 */

export type YoutubeHighlightsSectionProps = {
  items: Array<YoutubeHighlight>;
};

/*~
 * COMPONENT
 */

const YoutubeHighlightsSection: FunctionComponent<PropsWithChildren<YoutubeHighlightsSectionProps>> = (props) => {
  return (
    <SectionContainer>
      <SectionHeading title="📺 YouTube Highlights" />
      <div className="flex w-full flex-wrap pb-2">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {props.items.map((item) => (
              <YoutubeHighlightsSectionItem key={item.title} {...item} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </SectionContainer>
  );
};

export default YoutubeHighlightsSection;
