import React, {FunctionComponent} from 'react';

import Layout from 'layouts/Blog';

import PostList from 'components/PostList';

import {PageProps} from 'model/PageProps';

interface Props extends PageProps {}

const PageWrapper: FunctionComponent<Props> = props => {
  const { data, location } = props;

  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <PostList posts={posts} />{" "}
    </Layout>
  );
};

export default PageWrapper;
