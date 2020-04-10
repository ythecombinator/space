import React, {FunctionComponent} from 'react';

import Layout from 'layouts/Blog';

import PostList from 'components/PostList';

import {PageProps} from 'model/PageProps';

import {shuffleItems} from 'utils/array';
import NoSSR from 'utils/NoSSR';

import {featuredTalks} from 'data/about';

import * as Styled from './styles';

interface Props extends PageProps {}

const talks = shuffleItems(featuredTalks).slice(0, 9);

const PageWrapper: FunctionComponent<Props> = (props) => {
  const { data, location } = props;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <Styled.Container>
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
        <PostList posts={posts} />
      </Styled.Container>
    </Layout>
  );
};

export default PageWrapper;
