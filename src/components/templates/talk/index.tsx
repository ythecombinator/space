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
    talk: {
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

const Post = ({ data: { talk } }: Props) => (
  <Layout>
    <SEO
      title={talk.title}
      description={talk.description ? talk.description : talk.excerpt}
      image={talk.banner ? talk.banner.childImageSharp.resize.src : undefined}
      pathname={talk.slug}
    />
    <Styled.h2>{talk.title}</Styled.h2>
    <section sx={styles.section}>
      <MDXRenderer>{talk.body}</MDXRenderer>
    </section>
  </Layout>
);

export default Post;
