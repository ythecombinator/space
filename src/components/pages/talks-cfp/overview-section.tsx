import { FunctionComponent } from 'react';

import SectionContainer from 'components/shared/section-container';
import Typography from 'components/shared/typography';

/*~
 * COMPONENT
 */

const OverviewSection: FunctionComponent<{}> = () => {
  return (
    <SectionContainer className="prose dark:prose-invert">
      <Typography.p>
        Coordinating the whole process of submitting different sessions across different events in different parts of
        the globe is hard!
      </Typography.p>
      <Typography.p>
        I used to track these using a Trello board combined with different Google Documents. I wasn’t happy with the way
        things were going already — it simply didn’t scale — and when I faced myself about to add a third app to the
        equation (Google Calendar), I decided it was about time to shift to something else.
      </Typography.p>
      <Typography.p>
        In 2022, I decided to try Notion as my all-in-one sessions ↔ conferences solution — and it worked really well
        in my opinion.
      </Typography.p>
      <Typography.p>
        In 2023, I realized that many speakers could benefit from insights around conferences, so I decided to make this
        open data part of my personal page!
      </Typography.p>
    </SectionContainer>
  );
};

export default OverviewSection;
