import Link from 'next/link';
import { FC, useMemo } from 'react';
import { Themed } from 'theme-ui';

import { shuffleItems } from 'utils/array';

import { buildStyleObject } from 'styles/theme';

import FeaturedTalksItem, { FeaturedTalksItemProps } from './FeaturedTalksItem';

/*~
 * TYPES
 */

export type FeaturedTalksListProps = {
  items: Array<FeaturedTalksItemProps>;
};

/*~
 * STYLES
 */

const styles = buildStyleObject({
  collection: {
    display: 'flex',
    msFlexWrap: 'wrap',
    flexWrap: 'wrap',
    position: 'relative',
    width: '100vw',
    left: '50%',
    marginTop: '1rem',
    marginLeft: '-50vw',
  },
});

/*~
 * COMPONENT
 */

const FeaturedTalksList: FC<FeaturedTalksListProps> = (props) => {
  const allItems = props.items;
  const items = useMemo(() => shuffleItems(allItems).slice(0, 9), []);

  return (
    <div sx={styles.collection}>
      {items.map((item) => (
        <FeaturedTalksItem
          key={item.talkTitle}
          eventName={item.eventName}
          talkTitle={item.talkTitle}
          talkSlug={item.talkSlug}
          photo={item.photo}
        />
      ))}
    </div>
  );
};

export default FeaturedTalksList;
