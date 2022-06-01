import Link from 'next/link';
import * as React from 'react';
import { FC } from 'react';
import { Box, Flex, Themed } from 'theme-ui';

import ListingItemTags from 'components/ListingItemTags';
import Tag from 'components/shared/Tag';

/*~
 * TYPES
 */

export type ListingItemProps = {
  slug: string;
  path: string;
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
  const { title, subtitle, headline, tags, slug, path } = props;

  return (
    <Box my={4}>
      <Themed.h5
        sx={{
          a: { color: 'secondary' },
          fontSize: [1, 1, 2],
          mb: 2,
        }}
      >
        <Link href={`${path}/${slug}`}>{title}</Link>
      </Themed.h5>

      {/* Tags */}

      <Flex>
        {tags.map((tag) => (
          <Tag key={tag.id} name={tag.name} id={tag.id} />
        ))}
      </Flex>

      {/* Headline */}
      <Themed.p>{headline}</Themed.p>
    </Box>
  );
};

export default ListingItem;
