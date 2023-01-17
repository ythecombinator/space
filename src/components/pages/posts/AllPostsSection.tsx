import { FC } from 'react';

import { isEmpty, reversedIndexOf } from 'utils/array';
import { useLyraSearch } from 'utils/search';

import EmptyList from 'components/shared/EmptyList';
import SectionContainer from 'components/shared/SectionContainer';
import SectionHeading from 'components/shared/SectionHeading';

import AllPostsItem, {
  AllPostsItemProps,
} from 'components/pages/posts/AllPostsItem';

/*~
 * TYPES
 */

export type AllPostsSectionProps = {
  items: Array<
    Omit<AllPostsItemProps, 'index'> & {
      _tags: string;
    }
  >;
  searchTerm: string;
};

/*~
 * UTILS
 */

const searchSchema = {
  title: 'string',
  slug: 'string',
  summary: 'string',
  _tags: 'string',
} as const;

/*~
 * COMPONENT
 */

const AllPostsSection: FC<AllPostsSectionProps> = ({
  items: baseItems,
  searchTerm,
}) => {
  const items = useLyraSearch(searchSchema, baseItems, searchTerm);

  return (
    <SectionContainer>
      {isEmpty(items) && (
        <EmptyList
          heading="No items found 😢"
          subHeading="I don't have any posts on this topic."
        />
      )}
      <ul>
        {items.map((item) => (
          <AllPostsItem {...item} />
        ))}
      </ul>
    </SectionContainer>
  );
};

export default AllPostsSection;
