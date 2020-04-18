/** @jsx jsx */
import {createRef, FunctionComponent} from 'react';

import {Flex} from '@theme-ui/components';
import {jsx, Styled} from 'theme-ui';

import Layout from 'components/common/layout';
import Listing from 'components/common/listing';
import SEO from 'components/common/seo';

import NoSSR from 'utils/NoSSR';

import {PageProps} from 'model/PageProps';

import * as styles from './styles';
import {getFeaturedTalks} from './utils';

const Talks: FunctionComponent<PageProps> = (props) => {
  const talks = getFeaturedTalks();

  return (
    <Layout>
      <SEO title="Talks" />
      <Flex sx={styles.flex}>
        <Styled.h2>Talks</Styled.h2>
      </Flex>
      <styles.Collection>
        {talks.map((talk) => (
          <NoSSR>
            <styles.Item image={talk.image} key={talk.key}>
              <styles.Content>
                <styles.Link to={talk.link}>{talk.event}</styles.Link>
              </styles.Content>
            </styles.Item>
          </NoSSR>
        ))}
      </styles.Collection>
      <Listing items={props.data.allTalk.nodes} sx={styles.listing} />
    </Layout>
  );
};

export default Talks;