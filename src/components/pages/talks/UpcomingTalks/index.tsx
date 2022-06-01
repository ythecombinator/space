import { FC } from 'react';

import UpcomingTalk, {
  UpcomingTalkProps,
} from 'components/pages/talks/UpcomingTalk';
import CardList from 'components/shared/CardList';

/*~
 * TYPES
 */

export type UpcomingTalksProps = {
  items: UpcomingTalkProps[];
};

/*~
 * COMPONENT
 */

const UpcomingTalks: FC<UpcomingTalksProps> = (props) => {
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

export default UpcomingTalks;
