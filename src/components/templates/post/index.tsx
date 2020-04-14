/** @jsx jsx */
import React from 'react';

import {MDXRenderer} from 'gatsby-plugin-mdx';
import {jsx} from 'theme-ui';
import {Styled} from 'theme-ui';

import ItemTags from 'components/common/item-tags';
import Layout from 'components/common/layout';
import SEO from 'components/common/seo';

import * as styles from './styles';

interface Props {
  data: {
    post: {
      slug: string;
      title: string;
      date: string;
      tags?: {
        name: string;
        slug: string;
      }[];
      description?: string;
      body: string;
      excerpt: string;
      timeToRead: number;
      banner?: {
        childImageSharp: {
          resize: {
            src: string;
          };
        };
      };
    };
  };
}

const Post = ({ data: { post } }: Props) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.description ? post.description : post.excerpt}
      image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
      pathname={post.slug}
    />
    <Styled.h2>{post.title}</Styled.h2>
    <p sx={styles.p}>
      <time>{post.date}</time>
      {post.tags && (
        <React.Fragment>
          {` — `}
          <ItemTags tags={post.tags} />
        </React.Fragment>
      )}
      {` — `}
      <span>{post.timeToRead} min read</span>
    </p>
    <section sx={styles.section}>
      <MDXRenderer>{post.body}</MDXRenderer>
    </section>
  </Layout>
);

export default Post;
