import { FC } from 'react';

import { format } from 'utils/date';

import Card from 'components/shared/Card';
import CardBody from 'components/shared/CardBody';
import CardHeader from 'components/shared/CardHeader';

/*~
 * TYPES
 */

export type UpcomingSessionsItemProps = {
  id: string;
  eventName: string;
  eventStartingDate: string;
  eventEndingDate: string;
  locationPhoto: string;
  locationName: string;
};

/*~
 * COMPONENT
 */

const UpcomingSessionsItem: FC<UpcomingSessionsItemProps> = (props) => {
  const {
    id,
    eventName,
    eventStartingDate,
    eventEndingDate,
    locationName,
    locationPhoto,
  } = props;

  return (
    <Card key={id}>
      <CardHeader backgroundImage={locationPhoto}>{locationName}</CardHeader>
      <CardBody title={eventName} subtitle={`Porra`} />
    </Card>
  );
};

export default UpcomingSessionsItem;
