import { FC } from 'react';
import ListingItem, { ListingItemRenderable } from './ListingItem';

/*~
 * TYPES
 */

export type ListingProps = {
  items: ListingItemRenderable[];
  className?: string;
  showTags?: boolean;
};

/*~
 * COMPONENT
 */

const Listing: FC<ListingProps> = (props) => {
  const { items, className = ``, showTags = true } = props;

  return (
    <section sx={{ mb: [5, 6, 7] }} className={className}>
      {items.map((item) => (
        <ListingItem key={item.slug} item={item} showTags={showTags} />
      ))}
    </section>
  );
};

export default Listing;
