import { InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo as Metadata } from 'next-seo';
import { FaHammer, FaLaptopCode, FaPlane } from 'react-icons/fa';
import { GiCardRandom, GiTakeMyMoney } from 'react-icons/gi';

import { Routes, siteMetadata } from 'config/constants';

import { MetadataConfig, generateOpenGraphImage } from 'utils/open-graph';

import Admonition from 'components/shared/admonition';
import ButtonLink from 'components/shared/button-link';
import CurrentLocation from 'components/shared/current-location';
import SectionContainer from 'components/shared/section-container';
import SectionCover from 'components/shared/section-cover';
import Typography from 'components/shared/typography';

import Layout from 'components/layouts/page';

//  ---------------------------------------------------------------------------
//  CONFIG
//  ---------------------------------------------------------------------------

const metadata: MetadataConfig = {
  title: `About — ${siteMetadata.title}`,
  description: 'Who am I?',
};

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

//  ---------------------------------------------------------------------------
//  NEXT
//  ---------------------------------------------------------------------------

export async function getStaticProps() {
  const openGraphImage = await generateOpenGraphImage({
    title: metadata.description,
    path: `content/${Routes.about}/cover.png`,
    type: Routes.about,
  });

  return { props: { openGraphImage } };
}

const Page: NextPage<PageProps> = ({ openGraphImage }) => {
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
      <Layout heading="Build. Share. Rewind." headingGradient="cottonCandy">
        <SectionContainer className="prose dark:prose-invert">
          <SectionCover alt="This is me!" src="/content/misc/intro.jpg" />
          <Typography.p>
            Hello, {`I'm`} Matheus Albuquerque Brasil—but most folks know me as{' '}
            <Typography.mark>ythecombinator</Typography.mark> online.
          </Typography.p>
          <Admonition.Box>
            <Admonition.Title>Why... the... combinator?</Admonition.Title>
            <Admonition.Description>
              <Typography.p>
                Long story short; back in 2014-15 my handle everywhere used to be something around my full name — e.g.{' '}
                <Typography.mark>mabrasil</Typography.mark>, <Typography.mark>malbuquerque</Typography.mark>, etc. — and
                that was usually a huge source of confusion for non-native Portuguese speakers.
              </Typography.p>
              <Typography.p>I then realized I needed something in English to reach a broader audience.</Typography.p>
              <Typography.p>
                Back at the time, I was really into functional programming, abstractions, and compilers. When reading
                about the Y combinator, it all sounded super interesting to me.
              </Typography.p>
              <Typography.p>
                I was also inspired by the pseudonym of the brilliant{' '}
                <Typography.a href="https://en.wikipedia.org/wiki/Why_the_lucky_stiff">Jonathan Gillette</Typography.a>{' '}
                — ie. {`"`}why the lucky stiff{`"`} or {`"`}_why{`"`} — and I realized{' '}
                <Typography.mark>ythecombinator</Typography.mark> was available pretty everywhere; so I took it!
              </Typography.p>
              <Typography.p>
                By the way, if you{`'`}re up for a long read, Mike Vanier has{' '}
                <Typography.a href="https://mvanier.livejournal.com/2897.html">
                  a great explanation concerning the topic
                </Typography.a>
                !
              </Typography.p>
            </Admonition.Description>
          </Admonition.Box>

          <Typography.p>
            I love building for the web, and {`I'm`} an experienced software engineer and{' '}
            <Typography.a href="https://developers.google.com/community/experts/directory">
              Google Developer Expert
            </Typography.a>{' '}
            from Fortaleza, Brazil. {`I've`} worked as a software engineer and architect in product and consultancy
            companies, taking the best from both worlds.
          </Typography.p>

          <CurrentLocation
            href={siteMetadata.locationLink}
            location={siteMetadata.location}
            locationImage="/content/misc/prague.jpg"
          />

          <Typography.p>
            {`I'm`} currently based in Prague, Czech Republic, working as a Staff Software Engineer at{' '}
            <Typography.a href="https://www.medallia.com">Medallia</Typography.a>, where I lead the development of their
            surveys platform, while writing technical articles and speaking to many international conferences. My
            current focus is on educating advanced developers and growing communities around React, perceived
            performance and developer experience.
          </Typography.p>

          <Typography.p>
            Outside Medallia, I volunteer as a mentor at{' '}
            <Typography.a href="https://techlabs.org">TechLabs Berlin</Typography.a>, teaching front-end development,
            and {`I'm`} also part of the program committee of the US chapter of the{' '}
            <Typography.a href="https://reactsummit.com">React Summit</Typography.a> conference.
          </Typography.p>

          <Typography.p>
            Curious to know further details about the stuff I mentioned above? I keep some pages updated with these!
          </Typography.p>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <ButtonLink href={`/${Routes.life}`} icon={<GiCardRandom aria-hidden />}>
              Life
            </ButtonLink>
            <ButtonLink href={`/${Routes.traveling}`} icon={<FaPlane aria-hidden />}>
              Traveling
            </ButtonLink>
            <ButtonLink href={`/${Routes.experience}`} icon={<FaLaptopCode aria-hidden />}>
              Experience
            </ButtonLink>
            <ButtonLink href={`/${Routes.clients}`} icon={<GiTakeMyMoney aria-hidden />}>
              Clients
            </ButtonLink>
            <ButtonLink href={`/${Routes.uses}`} icon={<FaHammer aria-hidden />}>
              Setup
            </ButtonLink>
          </div>
        </SectionContainer>
      </Layout>
    </>
  );
};

export default Page;
