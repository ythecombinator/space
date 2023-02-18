import { FunctionComponent } from 'react';

import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';

import EventsSectionItem, {
  EventsSectionItemProps,
} from 'components/pages/talk/events-section-item';

/*~
 * TYPES
 */

export type EventsSectionProps = {
  items: Array<EventsSectionItemProps>;
};

/*~
 * COMPONENT
 */

const EventsSection: FunctionComponent<EventsSectionProps> = (props) => {
  const { items } = props;

  return (
    <SectionContainer className="prose">
      <SectionHeading title="️Presentations" />
      <ul className="grid grid-cols-1 gap-10 py-8 dark:border-gray-700 md:grid-cols-2">
        {items.map((item) => {
          return <EventsSectionItem key={item.eventName} {...item} />;
        })}
      </ul>
    </SectionContainer>
  );
};

export default EventsSection;
