import { FunctionComponent, PropsWithChildren } from 'react';

import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';

import ActiveTalksSectionItem, {
  ActiveTalksSectionItemProps,
} from 'components/pages/talks/active-talks-section-item';

/*~
 * TYPES
 */

export type ActiveTalksSectionProps = {
  items: Array<ActiveTalksSectionItemProps>;
};

/*~
 * COMPONENT
 */

const ActiveTalksSection: FunctionComponent<
  PropsWithChildren<ActiveTalksSectionProps>
> = ({ items }) => {
  return (
    <SectionContainer>
      <SectionHeading title="️‍🔥 Active Sessions" />
      <ul className="grid grid-cols-1 gap-10 py-8 dark:border-gray-700 md:grid-cols-3">
        {items.map((item) => {
          const { talkTitle, talkSlug, sessions } = item;
          return (
            <li key={item.talkSlug}>
              <ActiveTalksSectionItem
                talkTitle={talkTitle}
                talkSlug={talkSlug}
                sessions={sessions}
              />
            </li>
          );
        })}
      </ul>
    </SectionContainer>
  );
};

export default ActiveTalksSection;