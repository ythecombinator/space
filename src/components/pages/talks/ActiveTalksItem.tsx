import { FC } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';

import { Routes } from 'config/constants';

import CardOutlined from 'components/shared/card-outlined';

/*~
 * TYPES
 */

export type ActiveTalksItemProps = {
  talkTitle: string;
  talkSlug: string;
  sessions: Array<{ eventName: string; eventPage: string; eventFlag: string }>;
};

/*~
 * COMPONENT
 */

const ActiveTalksItem: FC<ActiveTalksItemProps> = (props) => {
  const { talkTitle, talkSlug, sessions } = props;

  return (
    <CardOutlined href={`/${Routes.talks}/${talkSlug}`} heading={talkTitle}>
      <div className="capsize flex items-center text-gray-800 dark:text-gray-200">
        <div className="mr-1 flex h-11 items-center justify-center bg-transparent text-lg">
          <FaMapMarkedAlt size={20} />
        </div>
        {sessions.map((event) => (
          <span
            key={event.eventName}
            className="ml-1"
            role="img"
            aria-label={event.eventName}
          >
            {event.eventFlag}
          </span>
        ))}
      </div>
    </CardOutlined>
  );
};

export default ActiveTalksItem;
