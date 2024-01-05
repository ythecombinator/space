import { FunctionComponent, PropsWithChildren, useMemo } from 'react';

import { ScrollArea, ScrollBar } from 'components/shared/scroll-area';
import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';

import TopicHighlightsSectionItem, {
  TopicHighlightsSectionItemProps,
} from 'components/pages/talks/topic-highlights-section-item';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type TopicHighlightsSectionProps = {
  title: string;
  items: Array<TopicHighlightsSectionItemProps>;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const TopicHighlightsSection: FunctionComponent<PropsWithChildren<TopicHighlightsSectionProps>> = (props) => {
  const { title, items } = props;

  return (
    <SectionContainer>
      <SectionHeading title={title} />
      <div className="flex w-full flex-wrap pb-2">
        <ScrollArea>
          <div className="flex space-x-4 pb-4">
            {items.map((item) => (
              <TopicHighlightsSectionItem key={item.talkTitle} {...item} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </SectionContainer>
  );
};

export default TopicHighlightsSection;
