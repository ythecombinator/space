import Link from 'next/link';
import { FC } from 'react';
import { Box, Flex, Themed } from 'theme-ui';

import { NavigationPath } from 'config/constants';

import Tag from 'components/shared/Tag';

/*~
 * TYPES
 */

export type AllTalksItemProps = {
  slug: string;
  title: string;
  headline: string;
  tags: {
    name: string;
    id: string;
  }[];
};

/*~
 * COMPONENT
 */

const AllTalksItem: FC<AllTalksItemProps> = (props) => {
  const { title, headline, tags, slug } = props;

  return (
    <Box my={4}>
      <Themed.h5
        sx={{
          a: { color: 'secondary' },
          fontSize: [1, 1, 2],
          mb: 2,
        }}
      >
        <Link href={`${NavigationPath.talks}/${slug}`}>{title}</Link>
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

export default AllTalksItem;
