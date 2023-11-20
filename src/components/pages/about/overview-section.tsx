import { FunctionComponent, PropsWithChildren } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { GiCardRandom, GiTakeMyMoney } from 'react-icons/gi';

import { Routes } from 'config/constants';

import ButtonLink from 'components/shared/button-link';
import CurrentLocation from 'components/shared/current-location';
import SectionContainer from 'components/shared/section-container';
import SectionCover from 'components/shared/section-cover';
import Typography from 'components/shared/typography';

/*~
 * COMPONENT
 */

const OverviewSection: FunctionComponent<PropsWithChildren<{}>> = () => {
  return (
    <SectionContainer className="prose dark:prose-dark">
      <SectionCover alt="This is me!" src="/content/biography/intro.jpg" />
      <Typography.p>
        Hey, {`I'm`} Matheus Albuquerque—but most folks know me as <Typography.mark>ythecombinator</Typography.mark>{' '}
        online.
      </Typography.p>

      <Typography.p>
        I love building for the web, and {`I'm`} an experienced software engineer and{' '}
        <Typography.a href="https://developers.google.com/community/experts/directory">
          Google Developer Expert
        </Typography.a>{' '}
        from Fortaleza, Brazil. {`I've `} worked as a software engineer and architect in product and consultancy
        companies, taking the best from both worlds.
      </Typography.p>

      <CurrentLocation
        href="http://maps.apple.com/?address=Prague%CZ&z=15"
        location="Prague, Czech Republic"
        locationImage="/content/biography/prague.jpg"
      />

      <Typography.p>
        {`I'm`} currently based in Prague, Czech Republic, working as a Senior Software Engineer at{' '}
        <Typography.a href="https://www.medallia.com">Medallia</Typography.a>, where I lead the development of their
        surveys platform, while writing technical articles and speaking to many international conferences. My current
        focus is on educating advanced developers and growing communities around React, perceived performance and
        developer experience.
      </Typography.p>

      <Typography.p>
        Outside Medallia, I volunteer as a mentor at{' '}
        <Typography.a href="https://techlabs.org">TechLabs Berlin</Typography.a>, teaching front-end development, and{' '}
        {`I'm`} also part of the program committee of the US chapter of the{' '}
        <Typography.a href="https://reactsummit.com">React Summit</Typography.a> conference.
      </Typography.p>

      <Typography.p>
        Curious to know further details about the stuff I mentioned above? I keep some pages updated with these!
      </Typography.p>

      <div className="flex flex-col gap-2 md:flex-row md:gap-2">
        <ButtonLink href={`/${Routes.life}`} icon={<GiCardRandom aria-hidden />}>
          Life
        </ButtonLink>
        <ButtonLink href={`/${Routes.experience}`} icon={<FaLaptopCode aria-hidden />}>
          Experience
        </ButtonLink>
        <ButtonLink href={`/${Routes.clients}`} icon={<GiTakeMyMoney aria-hidden />}>
          Clients
        </ButtonLink>
      </div>
    </SectionContainer>
  );
};

export default OverviewSection;
