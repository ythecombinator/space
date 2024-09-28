import { InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo as Metadata } from 'next-seo';

import { Routes, siteMetadata } from 'config/constants';

import FlightsContentService from 'services/content/flights';

import { MetadataConfig, generateOpenGraphImage } from 'utils/open-graph';

import SectionContainer from 'components/shared/section-container';
import SectionCover from 'components/shared/section-cover';
import Typography from 'components/shared/typography';

import Layout from 'components/layouts/page';

import FlightMap from 'components/pages/about/flight-map';

//  ---------------------------------------------------------------------------
//  CONFIG
//  ---------------------------------------------------------------------------

const metadata: MetadataConfig = {
  title: `Traveling — ${siteMetadata.title}`,
  description: 'Traveling',
};

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

//  ---------------------------------------------------------------------------
//  NEXT
//  ---------------------------------------------------------------------------

const flightsService = FlightsContentService.getInstance();

export async function getStaticProps() {
  flightsService.init();

  const flights = flightsService.getFlights();
  const airlines = flightsService.getAirlines();
  const airports = flightsService.getAirports();

  const openGraphImage = await generateOpenGraphImage({
    title: metadata.description,
    path: `content/${Routes.traveling}/cover.png`,
    type: Routes.about,
  });

  return { props: { openGraphImage, flights, airlines, airports } };
}

const Page: NextPage<PageProps> = ({ openGraphImage, flights, airlines, airports }) => {
  return (
    <>
      <Metadata
        title={metadata.title}
        openGraph={{
          type: 'profile',
          profile: {
            firstName: siteMetadata.authorFirstName,
            lastName: siteMetadata.authorLastName,
            username: siteMetadata.twitterHandle,
          },
          images: [{ url: openGraphImage }],
        }}
      />
      <Layout heading="Adventures. Memories." headingGradient="orangeCoral">
        <SectionContainer className="prose dark:prose-invert">
          <SectionCover alt="This is me!" src="/content/misc/traveling.jpg" />
        </SectionContainer>

        <SectionContainer className="prose dark:prose-invert">
          <Typography.p>
            As I started working as a remote developer, in late 2017, besides exploring a lot more Brazil, I decided to
            travel and live a little around the world for a while – not staying for too long on any city.
          </Typography.p>
          <Typography.p>In 2019, my wife and I moved to Prague, Czech Republic.</Typography.p>
        </SectionContainer>

        <SectionContainer className="prose dark:prose-invert">
          <Typography.h2>Flights</Typography.h2>
          <FlightMap flights={flights} airlines={airlines} airports={airports} />
        </SectionContainer>
      </Layout>
    </>
  );
};

export default Page;
