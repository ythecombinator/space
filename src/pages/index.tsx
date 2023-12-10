import { NextPage } from 'next';

import { socialNetworks } from 'config/constants';

import Badge from 'components/shared/badge';
import ButtonLink from 'components/shared/button-link';
import SectionContainer from 'components/shared/section-container';
import Typography from 'components/shared/typography';

import Layout from 'components/layouts/layout-page';

/*~
 * PAGE
 */

const HomePage: NextPage<{}> = () => {
  return (
    <Layout heading="Hi, I'm Matheus! 👋">
      <SectionContainer className="prose dark:prose-invert">
        <div className="flex flex-wrap gap-4">
          <Typography.Highlight color="fuchsia">
            <Typography.lead className="px-3 font-bold text-slate-800 dark:text-white">
              Sr. Software Engineer
            </Typography.lead>
          </Typography.Highlight>

          <Typography.Highlight color="emerald">
            <Typography.lead className="px-3 font-bold text-slate-800 dark:text-white">
              Mentor @ TechLabs
            </Typography.lead>
          </Typography.Highlight>

          <Typography.Highlight color="pink">
            <Typography.lead className="px-3 font-bold text-slate-800 dark:text-white">
              International Speaker
            </Typography.lead>
          </Typography.Highlight>
          <Typography.Highlight color="cyan">
            <Typography.lead className="px-3 font-bold text-slate-800 dark:text-white">
              Google Developer Expert
            </Typography.lead>
          </Typography.Highlight>

          <Typography.Highlight color="yellow">
            <Typography.lead className="px-3 font-bold text-slate-800 dark:text-white">
              Program Committee @ React Summit
            </Typography.lead>
          </Typography.Highlight>
        </div>

        <Typography.p>
          Welcome to my digital garden – I’m an iOS developer by training and an experienced front-end engineer by
          passion, who loves building for the web, doing React since Mixins™.
        </Typography.p>

        <Typography.p>
          I’m currently a Sr. UI Engineer at{' '}
          <Badge label="Medallia" avatar="/img/logos/medallia.png" href="https://www.medallia.com" />, where I’ve been
          helping them build their surveys platform with{' '}
          <Badge label="React" avatar="/img/logos/react.png" href="https://react.dev" /> and{' '}
          <Badge label="TypeScript" avatar="/img/logos/typescript.png" href="https://www.typescriptlang.org/" /> and a
          focus on user-perceived performance, accessibility, and developer experience. Before that, I did similar
          streams of work for companies like
          <Badge label="Citrix" avatar="/img/logos/citrix.png" href="https://www.citrix.com" />,{' '}
          <Badge label="STRV" avatar="/img/logos/strv.png" href="https://www.strv.com" />, and{' '}
          <Badge label="Beakyn" avatar="/img/logos/beakyn.png" href="https://beakyn.com" />.
        </Typography.p>

        <Typography.p>
          I’ve been building digital projects for years now and I have launched products for some of the world’s most
          respected brands, hired and mentored software engineers, bootstrapped and ran multidisciplinary teams and
          implemented organization-wide engineering initiatives.
        </Typography.p>

        <Typography.p>
          Other than this, I’m casually speaking, writing, traveling & advocating for craft brewing.
        </Typography.p>

        <Typography.p>
          Feel free to reach me out on social networks or write to me through land@ythecombinator.space.
        </Typography.p>
      </SectionContainer>

      <div className="flex flex-col gap-2 md:flex-row md:gap-2">
        {socialNetworks.map(({ label, href, Icon }) => (
          <ButtonLink key={label} href={href} icon={<Icon aria-hidden />}>
            {label}
          </ButtonLink>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
