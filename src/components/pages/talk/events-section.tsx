import { FunctionComponent, PropsWithChildren } from 'react';

import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';
import SectionList from 'components/shared/section-list';

import EventsSectionItem, { EventsSectionItemProps } from 'components/pages/talk/events-section-item';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type EventsSectionProps = {
  items: Array<EventsSectionItemProps>;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function EventsSection(props: PropsWithChildren<EventsSectionProps>) {
  const { items } = props;

  return (
    <SectionContainer>
      <SectionHeading title="️Presentations" />
      <SectionList>
        {items.map((item) => {
          return (
            <li key={item.eventName}>
              <EventsSectionItem {...item} />
            </li>
          );
        })}
      </SectionList>
    </SectionContainer>
  );
}

export default EventsSection;
