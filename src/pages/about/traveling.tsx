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
            Since becoming a remote developer in late 2017, {`I've`} embraced the freedom of working from anywhere, which
            sparked my passion for traveling. I began by exploring more of Brazil, and soon after, I took the leap to
            live and travel around the world, immersing myself in different cultures without lingering too long in any
            one place.
          </Typography.p>
          <Typography.p>
            In 2019, my wife and I made a significant move to Prague, Czech Republic, marking the start of an exciting
            new chapter in our journey. The world is vast, and {`we're`} determined to see it all!
          </Typography.p>
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
