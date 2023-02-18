import { FunctionComponent, PropsWithChildren } from 'react';

import SectionContainer from 'components/shared/section-container';
import Typography from 'components/shared/typography';

/*~
 * TYPES
 */

export type OverviewSectionProps = {};

/*~
 * COMPONENT
 */

const OverviewSection: FunctionComponent<
  PropsWithChildren<OverviewSectionProps>
> = () => {
  return (
    <SectionContainer className="prose">
      <Typography.p>
        {`I'm`} a Sr. Front-End Engineer at Medallia, building their surveys
        platform and helping them shape the customer experience market with
        React.
      </Typography.p>
      <Typography.p>
        I also volunteer as Mentor at TechLabs Berlin, a completely free
        platform for people to learn different programming skills.
      </Typography.p>
      <Typography.p>
        Other than this, {`I'm`} casually speaking, writing, traveling &
        advocating for craft brewing.
      </Typography.p>
      <Typography.p>
        Feel free to reach me out on social networks, Whereby, or schedule
        something on my calendar. Last but not least, you can write to me
        through land@ythecombinator.space.
      </Typography.p>
    </SectionContainer>
  );
};

export default OverviewSection;
