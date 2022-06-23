import { SimpleGrid } from '@chakra-ui/react';

import EventsItem, { EventsItemProps } from 'components/pages/talks/EventsItem';

/*~
 * TYPES
 */

export type EventsListProps = {
  items: Array<EventsItemProps>;
};

/*~
 * COMPONENT
 */

const EventsList = (props: EventsListProps) => {
  const { items } = props;

  return (
    <section>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing="40px">
        {items.map((item) => {
          const {
            eventName,
            eventLocation,
            eventStartingDate,
            eventEndingDate,
            sessionAudience,
            sessionLanguage,
            sessionOnline,
            sessionSlides,
            sessionRecording,
          } = item;

          return (
            <EventsItem
              key={eventName}
              eventName={eventName}
              eventLocation={eventLocation}
              eventStartingDate={eventStartingDate}
              eventEndingDate={eventEndingDate}
              sessionAudience={sessionAudience}
              sessionLanguage={sessionLanguage}
              sessionOnline={sessionOnline}
              sessionSlides={sessionSlides}
              sessionRecording={sessionRecording}
            />
          );
        })}
      </SimpleGrid>
    </section>
  );
};

export default EventsList;
