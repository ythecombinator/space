import { FunctionComponent, PropsWithChildren } from 'react';

import { Routes } from 'config/constants';

import Link from 'components/shared/link';
import SectionContainer from 'components/shared/section-container';
import Typography from 'components/shared/typography';

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

const OverviewSection: FunctionComponent<PropsWithChildren<OverviewSectionProps>> = (props) => {
  const { citiesTotal, countriesTotal, talksTotal, eventsTotal } = props;

  return (
    <SectionContainer className="prose dark:prose-invert">
      <Typography.p>
        {`I've`} been speaking and learning in public since 2015, mostly about web performance, JavaScript/TypeScript,
        React, and their ecosystem. Other topics also include programming languages design and iOS engineering.
      </Typography.p>
      <Typography.p>
        In total, {`I've`} presented <b>{talksTotal}</b> different sessions in <b>{eventsTotal}</b> events across{' '}
        <b>{citiesTotal}</b> cities in <b>{countriesTotal}</b> different countries.
      </Typography.p>
      <Typography.p>
        Want me to speak at your event? Please check my <Link href={`/${Routes.talksRider}`}>speaker rider</Link> and hit me
        up!
      </Typography.p>
      <Typography.p>
        Want to see how {`I'm`} doing when it comes to call-for-papers of known events? I keep an open record of my
        acceptances, rejections, etc. <Link href={`/${Routes.talksCFP}`}>here</Link>!
      </Typography.p>
    </SectionContainer>
  );
};

export default OverviewSection;
