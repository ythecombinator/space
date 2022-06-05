import { FC } from 'react';

import Card from 'components/shared/Card';
import CardBody from 'components/shared/CardBody';
import CardHeader from 'components/shared/CardHeader';
import CardSubtitle from 'components/shared/CardSubtitle';
import CardTitle from 'components/shared/CardTitle';

/*~
 * TYPES
 */

export type UpcomingTalkProps = {
  talkTitle: string;
  talkSlug: string;
  eventDate: string;
  eventLocation: string;
  eventLocationImage: string;
  eventName: string;
};

/*~
 * COMPONENT
 */

const UpcomingTalk: FC<UpcomingTalkProps> = (props) => {
  const {
    talkTitle,
    talkSlug,
    eventDate,
    eventLocation,
    eventLocationImage,
    eventName,
  } = props;

  return (
    <Card mode="fixed" key={talkSlug}>
      <CardHeader backgroundImage={eventLocationImage}>
        {eventLocation}
      </CardHeader>
      <CardBody>
        <CardSubtitle>{eventDate}</CardSubtitle>
        <CardTitle>{eventName}</CardTitle>
        <CardSubtitle>{talkTitle}</CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default UpcomingTalk;
