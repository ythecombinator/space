import { FunctionComponent } from 'react';

import SectionContainer from 'components/shared/section-container';

/*~
 * TYPES
 */

export type OverviewSectionProps = {};

/*~
 * COMPONENT
 */

const OverviewSection: FunctionComponent<OverviewSectionProps> = (props) => {
  return (
    <SectionContainer>
      <p className="text-lg leading-7 text-gray-500 my-2 dark:text-gray-400">
        I'm a Sr. Front-End Engineer at Medallia, building their surveys
        platform and helping them shape the customer experience market with
        React.
      </p>
      <p className="text-lg leading-7 text-gray-500 my-2 dark:text-gray-400">
        I also volunteer as Mentor at TechLabs Berlin, a completely free
        platform for people to learn different programming skills.
      </p>
      <p className="text-lg leading-7 text-gray-500 my-2 dark:text-gray-400">
        Other than this, I'm casually speaking, writing, traveling & advocating
        for craft brewing.
      </p>
      <p className="text-lg leading-7 text-gray-500 my-2 dark:text-gray-400">
        Feel free to reach me out on social networks, Whereby, or schedule
        something on my calendar. Last but not least, you can write to me
        through land@ythecombinator.space.
      </p>
    </SectionContainer>
  );
};

export default OverviewSection;
