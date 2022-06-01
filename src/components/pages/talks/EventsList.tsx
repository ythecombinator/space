import { Grid } from 'theme-ui';

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
    <section sx={{ mb: [5, 6, 7] }}>
      <Grid gap={4} columns={[3, '1fr 1fr 1fr']}>
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
      </Grid>
    </section>
  );
};

export default EventsList;
