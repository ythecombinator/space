import { FunctionComponent, PropsWithChildren } from 'react';

import { UpcomingSession } from 'services/content/talks';

import { isEmpty } from 'utils/array';
import { formatDate } from 'utils/date';

import EmptyList from 'components/shared/empty-list';
import Link from 'components/shared/link';
import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';
import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type UpcomingTalksSectionProps = {
  items: Array<UpcomingSession>;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const UpcomingTalksSectionItem: FunctionComponent<UpcomingSession> = ({
  talkTitle,
  talkSlug,
  eventLocation,
  eventName,
  eventDate,
}) => {
  return (
    <Link
      href={talkSlug}
      className="flex w-full flex-col justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <Typography.subtle className="text-neutral-900 dark:text-neutral-100">
        {eventLocation} • {<time dateTime={eventDate.toString()}>{formatDate(eventDate)}</time>}
      </Typography.subtle>
      <Typography.h3 className="mt-2">{talkTitle}</Typography.h3>
      <Typography.small className="mt-2">{eventName}</Typography.small>
    </Link>
  );
};

const UpcomingTalksSection: FunctionComponent<PropsWithChildren<UpcomingTalksSectionProps>> = ({ items }) => {
  return (
    <SectionContainer>
      <SectionHeading title="️Upcoming Sessions" />
      <div className="my-8 flex w-full flex-col space-y-4">
        {isEmpty(items) && (
          <EmptyList heading="No items found 😢" subHeading="I don't have any sessions scheduled for now." />
        )}
        {items.map((item) => (
          <UpcomingTalksSectionItem key={`${item.talkSlug}-${item.eventName}`} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default UpcomingTalksSection;
