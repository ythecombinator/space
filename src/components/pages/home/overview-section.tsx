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
      <div className="flex flex-wrap gap-4">
        <Typography.Highlight color="fuchsia">
          <Typography.lead className="font-bold px-3 text-slate-800 dark:text-white">
            Sr. Software Engineer @ Medallia
          </Typography.lead>
        </Typography.Highlight>

        <Typography.Highlight color="emerald">
          <Typography.lead className="font-bold px-3 text-slate-800 dark:text-white">
            Mentor @ TechLabs
          </Typography.lead>
        </Typography.Highlight>

        <Typography.Highlight color="pink">
          <Typography.lead className="font-bold px-3 text-slate-800 dark:text-white">
            International Speaker
          </Typography.lead>
        </Typography.Highlight>
        <Typography.Highlight color="cyan">
          <Typography.lead className="font-bold px-3 text-slate-800 dark:text-white">
            Google Developer Expert
          </Typography.lead>
        </Typography.Highlight>

        <Typography.Highlight color="yellow">
          <Typography.lead className="font-bold px-3 text-slate-800 dark:text-white">
            Program Committee @ React Summit
          </Typography.lead>
        </Typography.Highlight>
      </div>

      <Typography.p>
        Welcome to my digital garden – I am an iOS developer by training and an
        experienced front-end engineer by passion, who loves building for the
        web, being a software engineer since React Mixins.
      </Typography.p>
      <Typography.p>
        Other than this, {`I'm`} casually speaking, writing, traveling &
        advocating for craft brewing.
      </Typography.p>
      <Typography.p>
        Feel free to reach me out on social networks or write to me through
        land@ythecombinator.space.
      </Typography.p>
    </SectionContainer>
  );
};

export default OverviewSection;
