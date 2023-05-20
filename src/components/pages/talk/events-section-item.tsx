import { FunctionComponent, PropsWithChildren } from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FaMapMarkedAlt, FaYoutube, FaSpeakerDeck } from 'react-icons/fa';

import CardOutlined from 'components/shared/card-outlined';
import CardOutlinedListItem from 'components/shared/card-outlined-list-item';
import Link from 'components/shared/link';

/*~
 * TYPES
 */

export type EventsSectionItemProps = {
  // Event
  eventName: string;
  eventLocation: string;
  eventStartingDate: string;
  eventEndingDate: string;
  eventWebsite: string;
  // Session
  sessionAudience: string;
  sessionLanguage: string;
  sessionOnline: boolean;
  sessionSlides: string;
  sessionRecording: string;
};

/*~
 * COMPONENT
 */

const EventsSectionItem: FunctionComponent<
  PropsWithChildren<EventsSectionItemProps>
> = (props) => {
  const {
    eventName,
    eventLocation,
    eventWebsite,
    sessionSlides,
    sessionRecording,
  } = props;

  return (
    <CardOutlined heading={eventName}>
      <div className="flex-col">
        <CardOutlinedListItem icon={<FaMapMarkedAlt size={20} aria-hidden />}>
          {eventLocation}
        </CardOutlinedListItem>

        <CardOutlinedListItem icon={<CgWebsite size={20} aria-hidden />}>
          <Link href={eventWebsite} rel="nofollow">
            Check their website
          </Link>
        </CardOutlinedListItem>

        {sessionSlides && (
          <CardOutlinedListItem icon={<FaSpeakerDeck size={20} aria-hidden />}>
            <Link href={sessionSlides} rel="nofollow">
              Check the slides
            </Link>
          </CardOutlinedListItem>
        )}

        {sessionRecording && (
          <CardOutlinedListItem icon={<FaYoutube size={20} aria-hidden />}>
            <Link href={sessionRecording} rel="nofollow">
              Watch the recording
            </Link>
          </CardOutlinedListItem>
        )}
      </div>
    </CardOutlined>
  );
};

export default EventsSectionItem;
