import { PropsWithChildren } from 'react';

import CardFeatured from 'components/shared/card-featured';
import CardScrollArea from 'components/shared/card-scroll-area';
import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type TopicHighlightsSectionProps = {
  title: string;
  items: Array<{
    talkTitle: string;
    talkSlug: string;
    sessionsCount: number;
  }>;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function TopicHighlightsSection(props: PropsWithChildren<TopicHighlightsSectionProps>) {
  const { title, items } = props;

  return (
    <SectionContainer>
      <SectionHeading title={title} />
      <CardScrollArea>
        {items.map((item) => (
          <CardFeatured
            key={item.talkSlug}
            className="min-w-[300px] py-4 md:px-4"
            title={item.talkTitle}
            description={`Presented ${item.sessionsCount} times`}
            href={item.talkSlug}
            talkSlug={item.talkSlug}
          />
        ))}
      </CardScrollArea>
    </SectionContainer>
  );
}

export default TopicHighlightsSection;
