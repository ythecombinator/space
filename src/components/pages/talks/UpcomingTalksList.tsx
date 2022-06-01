import { FC } from 'react';

import CardList from 'components/shared/CardList';

import UpcomingTalk, {
  UpcomingTalkProps,
} from 'components/pages/talks/UpcomingTalksItem';

/*~
 * TYPES
 */

export type UpcomingTalksListProps = {
  items: UpcomingTalkProps[];
};

/*~
 * COMPONENT
 */

const UpcomingTalksList: FC<UpcomingTalksListProps> = (props) => {
  const { items } = props;

  return (
    <CardList>
      {items.map((session) => {
        const {
          talkSlug,
          eventDate,
          eventLocation,
          eventLocationImage,
          eventName,
          talkTitle,
        } = session;

        return (
          <UpcomingTalk
            key={eventName}
            talkTitle={talkTitle}
            talkSlug={talkSlug}
            eventDate={eventDate}
            eventLocation={eventLocation}
            eventLocationImage={eventLocationImage}
            eventName={eventName}
          />
        );
      })}
    </CardList>
  );
};

export default UpcomingTalksList;
