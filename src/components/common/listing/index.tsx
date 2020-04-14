/** @jsx jsx */
import {FunctionComponent} from 'react';

import {jsx} from 'theme-ui';

import ListItem from 'components/common/list-item';

import {NodesEntity} from 'model/PageProps';

import * as styles from './styles';

interface Props {
  items: NodesEntity[];
  className?: string;
  showTags?: boolean;
}

const Listing: FunctionComponent<Props> = (props) => {
  const { items, className, showTags = true } = props;

  return (
    <section sx={styles.section} className={className}>
      {items.map((item) => (
        <ListItem key={item.slug} item={item} showTags={showTags} />
      ))}
    </section>
  );
};

export default Listing;
