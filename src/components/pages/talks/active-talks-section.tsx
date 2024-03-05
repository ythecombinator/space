import { FunctionComponent, PropsWithChildren } from 'react';

import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';
import SectionList from 'components/shared/section-list';

import ActiveTalksSectionItem, { ActiveTalksSectionItemProps } from 'components/pages/talks/active-talks-section-item';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type ActiveTalksSectionProps = {
  items: Array<ActiveTalksSectionItemProps>;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const ActiveTalksSection: FunctionComponent<PropsWithChildren<ActiveTalksSectionProps>> = ({ items }) => {
  return (
    <SectionContainer>
      <SectionHeading title="️Active Sessions" />
      <SectionList>
        {items.map((item) => {
          const { talkTitle, talkSlug, sessions } = item;
          return (
            <li key={item.talkSlug}>
              <ActiveTalksSectionItem talkTitle={talkTitle} talkSlug={talkSlug} sessions={sessions} />
            </li>
          );
        })}
      </SectionList>
    </SectionContainer>
  );
};

export default ActiveTalksSection;
