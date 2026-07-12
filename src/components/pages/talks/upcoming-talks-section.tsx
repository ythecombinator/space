import dynamic from 'next/dynamic';
import { FunctionComponent, PropsWithChildren } from 'react';

import { UpcomingSession } from 'services/content/talks';

import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';

import UpcomingTalksSectionSkeleton from 'components/pages/talks/upcoming-talks-section-skeleton';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type UpcomingTalksSectionProps = {
  items: Array<UpcomingSession>;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const UpcomingTalksSectionList = dynamic(() => import('components/pages/talks/upcoming-talks-section-list'), {
  ssr: false,
  loading: () => <UpcomingTalksSectionSkeleton items={2} />,
});

const UpcomingTalksSection: FunctionComponent<PropsWithChildren<UpcomingTalksSectionProps>> = ({ items }) => {
  return (
    <SectionContainer>
      <SectionHeading title="️Upcoming Sessions" />
      <div className="my-8 flex w-full flex-col space-y-4">
        <UpcomingTalksSectionList items={items} />
      </div>
    </SectionContainer>
  );
};

export default UpcomingTalksSection;
