import { PropsWithChildren } from 'react';

import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';
import SectionList from 'components/shared/section-list';
import Typography from 'components/shared/typography';

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

function ActiveTalksSection({ items }: PropsWithChildren<ActiveTalksSectionProps>) {
  return (
    <SectionContainer>
      <SectionHeading title="️Active Sessions" />
      <Typography.p className="mb-6">
        These are talks {`I'm`} currently delivering and are available to be presented at your event!
      </Typography.p>
      <SectionList>
        {items.map((item) => {
          return (
            <li key={item.talkSlug}>
              <ActiveTalksSectionItem {...item} />
            </li>
          );
        })}
      </SectionList>
    </SectionContainer>
  );
}

export default ActiveTalksSection;
