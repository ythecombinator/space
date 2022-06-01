import Link from 'next/link';
import * as React from 'react';
import { FC } from 'react';
import { Box, Themed } from 'theme-ui';

import ListingItemTags from 'components/ListingItemTags';
import Tag from 'components/shared/Tag';

/*~
 * TYPES
 */

export type ListingItemProps = {
  slug: string;
  title: string;
  subtitle?: string;
  headline: string;
  tags: {
    name: string;
    id: string;
  }[];
};

/*~
 * COMPONENT
 */

const ListingItem: FC<ListingItemProps> = (props) => {
  const { title, subtitle, headline, tags, slug } = props;

  return (
    <Box my={4}>
      <Themed.h5
        sx={{
          a: { color: 'secondary' },
          fontSize: [1, 1, 2],
        }}
      >
        <Link href={slug}>{title}</Link>
      </Themed.h5>
      <Themed.p>{headline}</Themed.p>
      {tags.map((tag) => (
        <Tag key={tag.id} name={tag.name} id={tag.id} />
      ))}
    </Box>
  );
};

export default ListingItem;
