import React, {FunctionComponent} from 'react';

import Layout from 'layouts/Blog';

import PostList from 'components/PostList';

import {PageProps} from 'model/PageProps';

import {shuffleItems} from 'utils/array';

import {featuredTalks} from 'data/about';

import {StyledCollection, StyledContainer, StyledContent, StyledItem, StyledLink} from './styles';

interface Props extends PageProps {}

const talks = shuffleItems(featuredTalks).slice(0, 9);

const PageWrapper: FunctionComponent<Props> = props => {
  const { data, location } = props;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <StyledContainer>
        <StyledCollection>
          {talks.map(talk => (
            <StyledItem image={talk.image}>
              <StyledContent>
                <StyledLink to={talk.link}>{talk.event}</StyledLink>
              </StyledContent>
            </StyledItem>
          ))}
        </StyledCollection>
        <PostList posts={posts} />
      </StyledContainer>
    </Layout>
  );
};

export default PageWrapper;
