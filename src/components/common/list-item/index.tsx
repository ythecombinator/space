/** @jsx jsx */
import React, {FunctionComponent} from 'react';

import {Box} from '@theme-ui/components';
import {Link} from 'gatsby';
import {jsx, Styled} from 'theme-ui';

import ItemTags from 'components/common/item-tags';

import {NodesEntity} from 'model/PageProps';

import * as styles from './styles';

interface Props {
  item: NodesEntity;
  showTags?: boolean;
}

const ListItem: FunctionComponent<Props> = (props) => {
  const { item, showTags = true } = props;
  const isBlogPost = item.__typename === "MdxPost";

  return (
    <Box mb={4}>
      <Styled.a
        as={Link}
        sx={styles.title}
        //@ts-ignore
        to={item.slug}
      >
        {item.title}
      </Styled.a>
      {isBlogPost && (
        <p sx={styles.description}>
          <time>{item.date}</time>
          {item.tags && showTags && (
            <React.Fragment>
              {` — `}
              <ItemTags tags={item.tags} />
            </React.Fragment>
          )}
        </p>
      )}
    </Box>
  );
};

export default ListItem;
