import { UpcomingTalk as TUpcomingTalk } from 'pages/talks/utils';
import { FC } from 'react';
import { Themed } from 'theme-ui';

import Card from 'components/shared/Card';
import CardBody from 'components/shared/CardBody';
import CardHeader from 'components/shared/CardHeader';
import CardSubtitle from 'components/shared/CardSubtitle';

/*~
 * TYPES
 */

export type UpcomingTalkProps = TUpcomingTalk;

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
    <Card key={talkSlug}>
      <CardHeader backgroundImage={eventLocationImage}>
        {eventLocation}
      </CardHeader>
      <CardBody title={eventName} subtitle={eventDate}>
        <CardSubtitle>{talkTitle}</CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default UpcomingTalk;
