import { FunctionComponent, PropsWithChildren } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';

import CardOutlined from 'components/shared/card-outlined';
import Link from 'components/shared/link';
import Tooltip from 'components/shared/tooltip';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type ActiveTalksSectionItemProps = {
  talkTitle: string;
  talkSlug: string;
  sessions: Array<{ eventName: string; eventPage: string; eventFlag: string }>;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const ActiveTalksSectionItem: FunctionComponent<PropsWithChildren<ActiveTalksSectionItemProps>> = (props) => {
  const { talkTitle, talkSlug, sessions } = props;

  return (
    <Link href={talkSlug}>
      <CardOutlined heading={talkTitle}>
        <div className="flex items-center text-gray-800 dark:text-gray-200">
          <div className="mr-1 flex h-11 items-center justify-center bg-transparent text-lg">
            <FaMapMarkedAlt size={20} role="img" aria-label="Presented in these countries" />
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
    </Link>
  );
};

export default ActiveTalksSectionItem;
