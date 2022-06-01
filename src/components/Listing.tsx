import { FC } from 'react';

import ListingItem, { ListingItemProps } from 'components/ListingItem';

/*~
 * TYPES
 */

export type ListingProps = {
  path: string;
  items: ListingItemProps[];
};

/*~
 * COMPONENT
 */

const Listing: FC<ListingProps> = (props) => {
  const { path, items } = props;

  return (
    <section sx={{ mb: [5, 6, 7] }}>
      {items.map((item) => {
        const { title, subtitle, headline, slug, tags } = item;
        return (
          <ListingItem
            key={item.slug}
            title={title}
            headline={headline}
            subtitle={subtitle}
            slug={slug}
            path={path}
            tags={tags}
          />
        );
      })}
    </section>
  );
};

export default Listing;
