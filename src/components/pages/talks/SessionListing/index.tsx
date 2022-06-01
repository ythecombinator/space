import { Session } from 'pages/talks/talks.utils';
import { FC } from 'react';

import CardList from 'components/shared/CardList';

import SessionListingItem from 'components/pages/talks/SessionListingItem';

/*~
 * TYPES
 */

export type SessionListingProps = {
  items: Session[];
};

/*~
 * COMPONENT
 */

const SessionListing: FC<SessionListingProps> = (props) => {
  const { items } = props;

  return (
    <CardList>
      {items.map((session) => {
        const {
          id,
          eventName,
          eventStartingDate,
          eventEndingDate,
          location,
          recording,
          slides,
          audience,
          language,
          online,
        } = session;

        return (
          <SessionListingItem
            id={id}
            eventName={eventName}
            eventStartingDate={eventStartingDate}
            eventEndingDate={eventEndingDate}
            location={location}
            recording={recording}
            slides={slides}
            audience={audience}
            language={language}
            online={online}
          />
        );
      })}
    </CardList>
  );
};

export default SessionListing;
