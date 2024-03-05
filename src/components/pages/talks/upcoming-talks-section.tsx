import { FunctionComponent, PropsWithChildren } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { UpcomingSession } from 'services/content/talks';

import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';
import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type UpcomingTalksSectionProps = {
  items: Array<UpcomingSession>;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const UpcomingTalksSectionItem: FunctionComponent<UpcomingSession> = ({
  talkTitle,
  talkSlug,
  eventLocation,
  eventName,
}) => {
  return (
    <div className="group">
      <a
        href={talkSlug}
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex flex-col">
          <Typography.small className="text-neutral-900 dark:text-neutral-100 my-0">
            {eventLocation} • {eventName}
          </Typography.small>
          <Typography.h3 className="mt-2">{talkTitle}</Typography.h3>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <FaArrowRight />
        </div>
      </a>
    </div>
  );
};

const UpcomingTalksSection: FunctionComponent<PropsWithChildren<UpcomingTalksSectionProps>> = ({ items }) => {
  return (
    <SectionContainer>
      <SectionHeading title="️Upcoming Sessions" />
      <div className="my-8 flex flex-col space-y-4 w-full">
        {items.map((item) => (
          <UpcomingTalksSectionItem key={`${item.talkSlug}-${item.eventName}`} {...item} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default UpcomingTalksSection;
