import { FC } from 'react';

import SectionContainer from 'components/shared/section-container';

/*~
 * TYPES
 */

export type OverviewSectionProps = {
  citiesTotal: number;
  countriesTotal: number;
  talksTotal: number;
  eventsTotal: number;
};

/*~
 * COMPONENT
 */

const OverviewSection: FC<OverviewSectionProps> = (props) => {
  const { citiesTotal, countriesTotal, talksTotal, eventsTotal } = props;

  return (
    <SectionContainer>
      <p className="text-lg leading-7 text-gray-500 my-2 dark:text-gray-400">
        I've been speaking and learning in public since 2015, mostly about web
        performance, JavaScript/TypeScript, React, and their ecosystem. Other
        topics also include programming languages design and iOS engineering.
      </p>
      <p className="text-lg leading-7 text-gray-500 my-2 dark:text-gray-400">
        In total, I've presented <b>{talksTotal}</b> different sessions in{' '}
        <b>{eventsTotal}</b> events across <b>{citiesTotal}</b> cities in{' '}
        <b>{countriesTotal}</b> different countries.
      </p>
    </SectionContainer>
  );
};

export default OverviewSection;
