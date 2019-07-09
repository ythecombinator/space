import React, {FunctionComponent} from 'react';

import Layout from 'layouts/Blog';

import PostList from 'components/PostList';

import {PageProps} from 'model/PageProps';

import {featuredTalks} from 'data/about';

import {StyledCollection, StyledContainer, StyledContent, StyledItem, StyledLink} from './styles';

interface Props extends PageProps {}

const PageWrapper: FunctionComponent<Props> = props => {
  const { data, location } = props;
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout location={location}>
      <StyledContainer>
        <StyledCollection>
          {featuredTalks.map(talk => (
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
