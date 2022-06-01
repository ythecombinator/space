import { FC } from 'react';

import UpcomingSessionsItem, {
  UpcomingSessionsItemProps,
} from 'components/pages/talks/UpcomingSessionsItem';
import CardList from 'components/shared/CardList';

/*~
 * TYPES
 */

export type UpcomingSessionsProps = {
  items: UpcomingSessionsItemProps[];
};

/*~
 * COMPONENT
 */

const UpcomingSessions: FC<UpcomingSessionsProps> = (props) => {
  const { items } = props;

  return (
    <CardList>
      {items.map((session) => {
        const {
          id,
          eventName,
          eventStartingDate,
          eventEndingDate,
          locationName,
          locationPhoto,
        } = session;

        return (
          <UpcomingSessionsItem
            id={id}
            eventName={eventName}
            eventStartingDate={eventStartingDate}
            eventEndingDate={eventEndingDate}
            locationName={locationName}
            locationPhoto={locationPhoto}
          />
        );
      })}
    </CardList>
  );
};

export default UpcomingSessions;
