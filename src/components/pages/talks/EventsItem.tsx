import { Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import Card from 'components/shared/Card';
import CardBody from 'components/shared/CardBody';
import CardLink from 'components/shared/CardLink';
import CardSubtitle from 'components/shared/CardSubtitle';
import CardTitle from 'components/shared/CardTitle';

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
        <CardTitle>{eventName}</CardTitle>

        <Text fontSize="md" marginBottom={1}>
          ↝ 📅 {eventStartingDate}
        </Text>
        <Text fontSize="md" marginBottom={1}>
          ↝ 👥 {sessionAudience}
        </Text>
        <Text fontSize="md" marginBottom={1}>
          ↝ 🌎 {sessionLanguage}
        </Text>

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
