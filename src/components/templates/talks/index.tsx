/** @jsx jsx */
import {createRef, FunctionComponent} from 'react';

import {Flex} from '@theme-ui/components';
import alicante from 'assets/cities/alicante.jpg';
import amsterdam from 'assets/cities/amsterdam.jpg';
import berlin from 'assets/cities/berlin.jpg';
import brussels from 'assets/cities/brussels.jpg';
import goa from 'assets/cities/goa.jpg';
import lodz from 'assets/cities/lodz.jpg';
import oslo from 'assets/cities/oslo.jpg';
import reactGlobalSummit from 'assets/cities/react-global-summit.jpg';
import telAviv from 'assets/cities/tel-aviv.jpg';
import {jsx, Styled as StyledTheme} from 'theme-ui';

import EventsListing from 'components/common/events-listing';
import Layout from 'components/common/layout';
import Listing from 'components/common/listing';
import SEO from 'components/common/seo';

import NoSSR from 'utils/NoSSR';

import {PageProps} from 'model/PageProps';

import * as Styled from './styles';
import {getFeaturedTalks} from './utils';

const Talks: FunctionComponent<PageProps> = (props) => {
  const talks = getFeaturedTalks();

  return (
    <Layout>
      <SEO title="Talks" />
      <Flex sx={Styled.flex}>
        <StyledTheme.h2>Talks</StyledTheme.h2>
      </Flex>
      <Styled.Collection>
        {talks.map((talk) => (
          <NoSSR>
            <Styled.Item image={talk.image} key={talk.key}>
              <Styled.Content>
                <Styled.Link to={talk.link}>{talk.event}</Styled.Link>
              </Styled.Content>
            </Styled.Item>
          </NoSSR>
        ))}
      </Styled.Collection>

      <StyledTheme.h3>️‍🔥 Hot Stuff</StyledTheme.h3>
      <EventsListing
        data={[
          {
            name: "React Global Summit",
            link: "https://events.geekle.us/react3/",
            city: "Online",
            thumbnail: reactGlobalSummit,
            date: "November 8, 2022",
          },
          {
            name: "React Brussels 2022",
            link: "https://www.react.brussels",
            city: "Brussels, Belgium",
            thumbnail: brussels,
            date: "October 14, 2022",
          },
          {
            name: "React Alicante 2022",
            link: "https://reactalicante.es",
            city: "Alicante, Spain",
            thumbnail: alicante,
            date: "September 30, 2022",
          },
          {
            name: "NDC Oslo 2022",
            link:
              "https://ndcoslo.com/agenda/web-performance-apis-you-probably-didnt-know-existed-0iq4/05py78xsdxx",
            city: "Oslo, Norway",
            thumbnail: oslo,
            date: "September 28, 2022",
          },
          {
            name: "React India 2022",
            link: "https://www.reactindia.io/speakers/matheus-albuquerque",
            city: "Goa, India",
            thumbnail: goa,
            date: "September 23, 2022",
          },
          {
            name: "React Berlin Meetup",
            link: "https://www.meetup.com/react-berlin-meetup/events/287841091",
            city: "Berlin, Germany",
            thumbnail: berlin,
            date: "September 8, 2022",
          },
          {
            name: "Dev Conf 2022",
            link: "https://devconf.pl/speakers/matheus-albuquerque",
            city: "Łódź, Poland",
            thumbnail: lodz,
            date: "September 2, 2022",
          },
          {
            name: "React Next 2022",
            link: "https://www.react-next.com",
            city: "Tel-Aviv, Israel",
            thumbnail: telAviv,
            date: "June 28, 2022",
          },
          {
            name: "React Summit 2022",
            link: "https://reactsummit.com",
            city: "Amsterdam, Netherlands",
            thumbnail: amsterdam,
            date: "June 17, 2022",
          },
        ]}
      />

      <StyledTheme.h3>📚 All Sessions</StyledTheme.h3>
      <Listing items={props.data.allTalk.nodes} sx={Styled.listing} />
    </Layout>
  );
};

export default Talks;
