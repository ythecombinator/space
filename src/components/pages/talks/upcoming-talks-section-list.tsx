import { FunctionComponent, useMemo } from 'react';

import { UpcomingSession } from 'services/content/talks';

import { isEmpty } from 'utils/array';
import { formatDate } from 'utils/date';
import { viewTransitionProps, vtKeys } from 'utils/view-transition';

import EmptyList from 'components/shared/empty-list';
import Link from 'components/shared/link';
import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type UpcomingTalksSectionListProps = {
  items: Array<UpcomingSession>;
};

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

function filterUpcomingSessions(items: Array<UpcomingSession>) {
  const today = Date.now();

  return items
    .filter((item) => item.eventDate > today)
    .sort((sessionA, sessionB) => sessionA.eventDate - sessionB.eventDate);
}

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
      {...viewTransitionProps(vtKeys.talkCard(talkSlug))}
    >
      <Typography.subtle className="text-neutral-900 dark:text-neutral-100">
        {eventLocation} • {<time dateTime={eventDate.toString()}>{formatDate(eventDate)}</time>}
      </Typography.subtle>
      <Typography.h3 className="mt-2" {...viewTransitionProps(vtKeys.talkTitle(talkSlug))}>
        {talkTitle}
      </Typography.h3>
      <Typography.small className="mt-2">{eventName}</Typography.small>
    </Link>
  );
};

function UpcomingTalksSectionList({ items }: UpcomingTalksSectionListProps) {
  const upcomingItems = useMemo(() => filterUpcomingSessions(items), [items]);

  if (isEmpty(upcomingItems)) {
    return <EmptyList heading="No items found 😢" subHeading="I don't have any sessions scheduled for now." />;
  }

  return upcomingItems.map((item) => <UpcomingTalksSectionItem key={`${item.talkSlug}-${item.eventName}`} {...item} />);
}

export default UpcomingTalksSectionList;
