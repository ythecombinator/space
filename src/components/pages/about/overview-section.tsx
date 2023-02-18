import { FunctionComponent, PropsWithChildren } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { GiCardRandom, GiTakeMyMoney, GiBattleGear } from 'react-icons/gi';

import ButtonLink from 'components/shared/button-link';
import SectionContainer from 'components/shared/section-container';
import SectionCover from 'components/shared/section-cover';
import Typography from 'components/shared/typography';

/*~
 * COMPONENT
 */

const OverviewSection: FunctionComponent<PropsWithChildren<{}>> = () => {
  return (
    <SectionContainer className="prose">
      <SectionCover alt="This is me!" src="/img/about/intro.jpg" />
      <Typography.p>
        Hey, {`I'm`} Matheus—but most folks know me as ythecombinator online.
      </Typography.p>
      <Typography.p>
        I love building for the web, and {`I'm`} an experienced software
        engineer and Google Developer Expert from Fortaleza, Brazil. {`I've`}
        worked as a software engineer and architect for most of the past decade,
        in product and consultancy companies, taking the best from both worlds.
      </Typography.p>
      <Typography.p>
        {`I'm`} currently based in Prague, Czech Republic, working as a Senior
        Software Engineer at Medallia, where I help leading the development of
        their Surveys, while writing technical articles and speaking to many
        international conferences. My current focus is on educating advanced
        developers and growing communities around React, perceived performance
        and developer experience.
      </Typography.p>
      <Typography.p>
        Outside Medallia, I volunteer as Mentor at TechLabs Berlin, teaching
        front-end development, and {`I'm`} also part of the program committee of
        the US chapter of the React Summit conference.
      </Typography.p>
      <Typography.p>
        Curious to know further details about the stuff I mentioned above? I
        keep some pages updated with these!
      </Typography.p>

      <div className="flex flex-col gap-2 md:flex-row md:gap-2">
        <ButtonLink href="/about/life" icon={<GiCardRandom />}>
          Life
        </ButtonLink>
        <ButtonLink href="/about/work" icon={<FaLaptopCode />}>
          Work
        </ButtonLink>
        <ButtonLink href="/about/clients" icon={<GiTakeMyMoney />}>
          Clients
        </ButtonLink>
        <ButtonLink href="/about/uses" icon={<GiBattleGear />}>
          Uses
        </ButtonLink>
      </div>
    </SectionContainer>
  );
};

export default OverviewSection;
