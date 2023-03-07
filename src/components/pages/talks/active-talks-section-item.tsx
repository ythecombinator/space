import { FunctionComponent, PropsWithChildren } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';

import { Routes } from 'config/constants';

import CardOutlined from 'components/shared/card-outlined';
import Link from 'components/shared/link';
import Tooltip from 'components/shared/tooltip';

/*~
 * TYPES
 */

export type ActiveTalksSectionItemProps = {
  talkTitle: string;
  talkSlug: string;
  sessions: Array<{ eventName: string; eventPage: string; eventFlag: string }>;
};

/*~
 * COMPONENT
 */

const ActiveTalksSectionItem: FunctionComponent<
  PropsWithChildren<ActiveTalksSectionItemProps>
> = (props) => {
  const { talkTitle, talkSlug, sessions } = props;

  return (
    <Link href={`/${Routes.talks}/${talkSlug}`}>
      <CardOutlined heading={talkTitle}>
        <div className="flex items-center text-gray-800 dark:text-gray-200">
          <div className="mr-1 flex h-11 items-center justify-center bg-transparent text-lg">
            <FaMapMarkedAlt
              size={20}
              role="img"
              aria-label="Presented in these countries"
            />
          </div>
          {sessions.map((event) => (
            <Tooltip key={event.eventName} content={event.eventName}>
              <span
                key={event.eventName}
                className="ml-1"
                role="img"
                aria-label={event.eventName}
              >
                {event.eventFlag}
              </span>
            </Tooltip>
          ))}
        </div>
      </CardOutlined>
    </Link>
  );
};

export default ActiveTalksSectionItem;
