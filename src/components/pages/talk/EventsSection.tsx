import { FC } from 'react';

import SectionContainer from 'components/shared/SectionContainer';
import SectionHeading from 'components/shared/SectionHeading';

import EventsSectionItem, {
  EventsItemProps,
} from 'components/pages/talk/EventsItem';

/*~
 * TYPES
 */

export type EventsSectionProps = {
  items: Array<EventsItemProps>;
};

/*~
 * COMPONENT
 */

const EventsSection: FC<EventsSectionProps> = (props) => {
  const { items } = props;

  return (
    <SectionContainer>
      <SectionHeading title="️‍🔥 Active Sessions" />
      <ul className="grid grid-cols-1 gap-10 py-8 dark:border-gray-700 md:grid-cols-2">
        {items.map((item) => {
          return <EventsSectionItem key={item.eventName} {...item} />;
        })}
      </ul>
    </SectionContainer>
  );
};

export default EventsSection;
