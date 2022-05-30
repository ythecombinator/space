import { Session } from 'pages/talks/talks.utils';
import { FC } from 'react';

import { format } from 'utils/date';

import Card from 'components/Card';
import CardBody from 'components/CardBody';
import CardHeader from 'components/CardHeader';
import CardLink from 'components/CardLink';

/*~
 * TYPES
 */

export type SessionListingItemProps = Session;

/*~
 * COMPONENT
 */

const SessionListingItem: FC<SessionListingItemProps> = (props) => {
  const {
    id,
    location,
    eventName,
    eventStartingDate,
    eventEndingDate,
    audience,
    language,
    online,
    slides,
    recording,
  } = props;

  return (
    <Card key={id}>
      <CardHeader backgroundImage={location.photo!}>{location.name}</CardHeader>
      <CardBody
        title={eventName!}
        subtitle={`${format(eventStartingDate)} - ${format(eventEndingDate)}`}
        contents={
          <section>
            <p>↝ 👥 {audience}</p>
            <p>↝ 🌎 {language}</p>
            {online && <p>↝ 🌐 Online session</p>}
          </section>
        }
      >
        {slides && (
          <CardLink href={slides}>🖥️ View the presentation deck</CardLink>
        )}
        {recording && (
          <CardLink href={recording}>📺 Watch the video recording</CardLink>
        )}
      </CardBody>
    </Card>
  );
};

export default SessionListingItem;
