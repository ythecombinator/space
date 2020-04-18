/** @jsx jsx */
import {createRef, FunctionComponent} from 'react';

import {Flex} from '@theme-ui/components';
import {jsx, Styled as StyledTheme} from 'theme-ui';

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
      <Listing items={props.data.allTalk.nodes} sx={Styled.listing} />
    </Layout>
  );
};

export default Talks;
