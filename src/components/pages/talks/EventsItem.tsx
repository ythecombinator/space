import { FC, PropsWithChildren } from 'react';
import { Themed } from 'theme-ui';

import Card from 'components/shared/Card';
import CardBody from 'components/shared/CardBody';
import CardLink from 'components/shared/CardLink';
import CardSubtitle from 'components/shared/CardSubtitle';

/*~
 * TYPES
 */

export type EventsItemProps = PropsWithChildren<{
  // Event
  eventName: string;
  eventLocation: string;
  eventStartingDate: string;
  eventEndingDate: string;
  // Session
  sessionAudience: string;
  sessionLanguage: string;
  sessionOnline: boolean;
  sessionSlides: string;
  sessionRecording: string;
}>;

/*~
 * COMPONENT
 */

const EventsItem = (props: EventsItemProps) => {
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
  } = props;

  return (
    <Card mode="fit">
      <CardBody>
        <CardSubtitle>{eventLocation}</CardSubtitle>
        <Themed.h6>{eventName}</Themed.h6>

        <hr />

        <p>↝ 📅 {eventStartingDate}</p>
        <p>↝ 👥 {sessionAudience}</p>
        <p>↝ 🌎 {sessionLanguage}</p>

        {sessionSlides && (
          <CardLink href={sessionSlides}>🖥️ Presentation deck</CardLink>
        )}
        {sessionRecording && (
          <CardLink href={sessionRecording}>📺 Session recording</CardLink>
        )}
      </CardBody>
    </Card>
  );
};

export default EventsItem;
