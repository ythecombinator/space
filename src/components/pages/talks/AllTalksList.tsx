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
    <section sx={{ mb: [5, 6, 7] }}>
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
    </section>
  );
};

export default AllTalksList;
