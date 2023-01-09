import { FC } from 'react';

import AllTalksListItem, {
  AllTalksItemProps,
} from 'components/pages/talks/AllTalksItem';

/*~
 * TYPES
 */

export type AllTalksListProps = {
  items: Array<AllTalksItemProps>;
};

/*~
 * COMPONENT
 */

const AllTalksList: FC<AllTalksListProps> = (props) => {
  const { items } = props;

  return (
    <ul className="grid grid-cols-1 gap-10 py-8 dark:border-gray-700 md:grid-cols-3">
      {!items.length && 'No posts found.'}
      {items.map((item) => {
        const { title, headline, slug, tags } = item;
        return (
          <AllTalksListItem
            key={item.slug}
            title={title}
            headline={headline}
            slug={slug}
            tags={tags}
          />
        );
      })}
    </ul>
  );
};

export default AllTalksList;
