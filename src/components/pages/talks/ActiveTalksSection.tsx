import { FC } from 'react';

import SectionContainer from 'components/shared/SectionContainer';
import SectionHeading from 'components/shared/SectionHeading';

import ActiveTalksSectionItem, {
  ActiveTalksItemProps,
} from 'components/pages/talks/ActiveTalksItem';

/*~
 * TYPES
 */

export type ActiveTalksSectionProps = {
  items: Array<ActiveTalksItemProps>;
};

/*~
 * COMPONENT
 */

const ActiveTalksSection: FC<ActiveTalksSectionProps> = (props) => {
  const { items } = props;

  return (
    <SectionContainer>
      <SectionHeading title="️‍🔥 Active Sessions" />
      <ul className="grid grid-cols-1 gap-10 py-8 dark:border-gray-700 md:grid-cols-3">
        {items.map((item) => {
          const { talkTitle, talkSlug, sessions } = item;
          return (
            <ActiveTalksSectionItem
              key={item.talkSlug}
              talkTitle={talkTitle}
              talkSlug={talkSlug}
              sessions={sessions}
            />
          );
        })}
      </ul>
    </SectionContainer>
  );
};

export default ActiveTalksSection;
