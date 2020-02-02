import React, {FunctionComponent} from 'react';

import Layout from 'layouts/Blog';

import {graphql} from 'gatsby';
import Helmet from 'react-helmet';

import Post from 'components/Post';

import {TemplateProps} from 'model/TemplateProps';

import favicon from 'assets/favicon.png';

interface Props extends TemplateProps {}

export const postQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        type
      }
    }
  }
`;

const TemplateWrapper: FunctionComponent<Props> = props => {
  const { location, data } = props;
  const post = data.markdownRemark;

  return (
    <Layout location={location}>
      <div>
        <Helmet
          title={post.frontmatter.title}
          link={[
            {
              rel: "shortcut icon",
              type: "image/png",
              href: favicon
            }
          ]}
        />
        <Post postData={post} />
      </div>
    </Layout>
  );
};

export default TemplateWrapper;
