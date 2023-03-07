import { InferGetStaticPropsType, NextPage } from 'next';

import { socialNetworks } from 'config/constants';

import TalksContentService from 'services/talks-content-service';

import ButtonLink from 'components/shared/button-link';

import Layout from 'components/layouts/layout-page';

import OverviewSection from 'components/pages/home/overview-section';

/*~
 * TYPES
 */

export type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

/*~
 * NEXTJS
 */

const talksServiceInstance = TalksContentService.getInstance();

export async function getStaticProps() {
  const [latestTalks] = await Promise.all([talksServiceInstance.getLatest(3)]);

  return { props: { latestTalks } };
}

/*~
 * PAGE
 */

const HomePage: NextPage<HomePageProps> = (props) => {
  const {} = props;

  return (
    <Layout heading="Hi, I'm Matheus! 👋">
      <OverviewSection />
      <div className="flex flex-col gap-2 md:flex-row md:gap-2">
        {socialNetworks.map(({ label, href, Icon }) => (
          <ButtonLink key={label} href={href} icon={<Icon aria-hidden />}>
            {label}
          </ButtonLink>
        ))}
      </div>
      <div className="flex w-full justify-center">
        <div className="mt-2 justify-center"></div>
      </div>
    </Layout>
  );
};

export default HomePage;
