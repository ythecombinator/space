import { PropsWithChildren } from 'react';
import { FiMapPin } from 'react-icons/fi';

import { vtKeys } from 'utils/view-transition';

import CardOutlined from 'components/shared/card-outlined';
import Chip from 'components/shared/chip';
import Link from 'components/shared/link';
import Tooltip from 'components/shared/tooltip';
import ViewTransitionTarget from 'components/shared/view-transition-target';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type ActiveTalksSectionItemProps = {
  talkTitle: string;
  talkSlug: string;
  talkCategory: string;
  sessions: Array<{ eventName: string; eventPage: string; eventFlag: string }>;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function ActiveTalksSectionItem(props: PropsWithChildren<ActiveTalksSectionItemProps>) {
  const { talkTitle, talkSlug, talkCategory, sessions } = props;

  return (
    <Link href={talkSlug}>
      <ViewTransitionTarget as="div" name={vtKeys.talkCard(talkSlug)}>
        <CardOutlined
          heading={
            <ViewTransitionTarget name={vtKeys.talkTitle(talkSlug)} contain={false}>
              <div className="flex flex-col gap-2">
                {talkCategory === 'workshop' && <Chip variant="default">Workshop</Chip>}
                {talkTitle}
              </div>
            </ViewTransitionTarget>
          }
        >
          <div className="flex items-center text-gray-800 dark:text-gray-200">
            <div className="mr-1 flex h-11 items-center justify-center bg-transparent text-lg">
              <FiMapPin size={20} role="img" aria-label="Presented in these countries" />
            </div>
            {sessions.map((event) => (
              <Tooltip.Provider key={event.eventName}>
                <Tooltip.Root>
                  <Tooltip.Trigger>
                    <span className="ml-1" role="img" aria-label={event.eventName}>
                      {event.eventFlag}
                    </span>
                  </Tooltip.Trigger>
                  <Tooltip.Content>{event.eventName}</Tooltip.Content>
                </Tooltip.Root>
              </Tooltip.Provider>
            ))}
          </div>
        </CardOutlined>
      </ViewTransitionTarget>
    </Link>
  );
}

export default ActiveTalksSectionItem;
