import Link from 'next/link';
import * as React from 'react';
import { FC } from 'react';
import { Box } from 'theme-ui';

import ListingItemTags from 'components/ListingItemTags';

/*~
 * TYPES
 */

export type ListingItemRenderable = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  description: string;
  timeToRead?: number;
  tags?: {
    name: string;
    slug: string;
  }[];
};

export type ListingItemProps = {
  item: ListingItemRenderable;
  showTags?: boolean;
};

/*~
 * COMPONENT
 */

const ListingItem: FC<ListingItemProps> = (props) => {
  const { item, showTags = true } = props;

  return (
    <Box mb={4}>
      <Link
        href={item.slug}
        sx={(theme) => ({
          ...theme.styles?.a,
          fontSize: [1, 2, 3],
          color: `text`,
        })}
      >
        {item.title}
      </Link>
      <p
        sx={{
          color: `secondary`,
          mt: 1,
          a: { color: `secondary` },
          fontSize: [1, 1, 2],
        }}
      >
        <time>{item.date}</time>
        {item.tags && showTags && (
          <React.Fragment>
            {` — `}
            <ListingItemTags tags={item.tags} />
          </React.Fragment>
        )}
      </p>
    </Box>
  );
};

export default ListingItem;
