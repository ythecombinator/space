import { InferGetStaticPropsType, NextPage } from 'next';

import { siteMetadata, socialNetworks } from 'config/constants';

import { generateOpenGraphImage } from 'utils/open-graph';

import ButtonLink from 'components/shared/button-link';

import Layout from 'components/layouts/layout-page';

import OverviewSection from 'components/pages/home/overview-section';

/*~
 * PAGE
 */

const HomePage: NextPage<{}> = () => {
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
