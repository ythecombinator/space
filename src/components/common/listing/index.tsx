/** @jsx jsx */
import {FunctionComponent} from 'react';

import {jsx} from 'theme-ui';

import BlogListItem from 'components/common/blog-list-item';

import {NodesEntity} from 'model/PageProps';

import * as styles from './styles';

interface Props {
  posts: NodesEntity[];
  className?: string;
  showTags?: boolean;
}

const Listing: FunctionComponent<Props> = (props) => {
  const { posts, className, showTags = true } = props;

  return (
    <section sx={styles.section} className={className}>
      {posts.map((item) => (
        <BlogListItem key={item.slug} item={item} showTags={showTags} />
      ))}
    </section>
  );
};

export default Listing;
