import { FunctionComponent } from 'react';
import { FaMapMarkedAlt, FaYoutube, FaSpeakerDeck } from 'react-icons/fa';

import { Routes } from 'config/constants';

import CardOutlined from 'components/shared/card-outlined';
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

const EventsSectionItem: FunctionComponent<EventsSectionItemProps> = (
  props
) => {
  const {
    eventName,
    eventLocation,
    sessionLanguage,
    sessionSlides,
    sessionRecording,
  } = props;

  return (
    <CardOutlined href={`/${Routes.talks}`} heading={eventName}>
      <div className="flex-col">
        <div className="capsize flex items-center text-gray-800 dark:text-gray-200">
          <div className="mr-1 flex h-11 items-center justify-center bg-transparent text-lg">
            <FaMapMarkedAlt size={20} />
          </div>
          {eventLocation}
        </div>
        {sessionSlides && (
          <div className="capsize flex items-center text-gray-800 dark:text-gray-200">
            <div className="mr-1 flex h-11 items-center justify-center bg-transparent text-lg">
              <FaSpeakerDeck size={20} />
            </div>
            <Link href={sessionSlides} rel="nofollow">
              Check the slides
            </Link>
          </div>
        )}
        {sessionRecording && (
          <div className="capsize flex items-center text-gray-800 dark:text-gray-200">
            <div className="mr-1 flex h-11 items-center justify-center bg-transparent text-lg">
              <FaYoutube size={20} />
            </div>

            <Link href={sessionRecording} rel="nofollow">
              Watch the recording
            </Link>
          </div>
        )}
      </div>
    </CardOutlined>
  );
};

export default EventsSectionItem;
