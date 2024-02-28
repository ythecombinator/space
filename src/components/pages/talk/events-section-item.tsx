import { FunctionComponent, PropsWithChildren } from 'react';
import { BsFillCalendarEventFill } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';
import { FaMapMarkedAlt, FaSpeakerDeck, FaYoutube } from 'react-icons/fa';

import { FormattedDate } from 'utils/date';

import CardOutlined from 'components/shared/card-outlined';
import CardOutlinedListItem from 'components/shared/card-outlined-list-item';
import Link from 'components/shared/link';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type EventsSectionItemProps = {
  // Event
  eventName: string;
  eventLocation: string;
  eventStartingDate: FormattedDate;
  eventEndingDate: FormattedDate;
  eventWebsite: string;
  isSingleDayEvent: boolean;
  // Session
  sessionAudience: string;
  sessionLanguage: string;
  sessionOnline: boolean;
  sessionSlides: string;
  sessionRecording: string;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const EventsSectionItem: FunctionComponent<PropsWithChildren<EventsSectionItemProps>> = (props) => {
  const {
    eventName,
    eventLocation,
    isSingleDayEvent,
    eventStartingDate,
    eventEndingDate,
    eventWebsite,
    sessionSlides,
    sessionRecording,
  } = props;

  return (
    <CardOutlined heading={eventName}>
      <div className="flex-col">
        <CardOutlinedListItem icon={<FaMapMarkedAlt size={20} aria-hidden />}>{eventLocation}</CardOutlinedListItem>

        <CardOutlinedListItem icon={<BsFillCalendarEventFill size={20} aria-hidden />}>
          <time dateTime={eventStartingDate.raw}>{eventStartingDate.formatted}</time>

          {!isSingleDayEvent && (
            <>
              <span className="mx-1">—</span>
              <time dateTime={eventEndingDate.raw}>{eventEndingDate.formatted}</time>
            </>
          )}
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
