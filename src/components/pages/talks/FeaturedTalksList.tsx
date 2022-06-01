import Link from 'next/link';
import { FC } from 'react';
import { Themed } from 'theme-ui';

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
  const { items } = props;

  return (
    <div sx={styles.collection}>
      {items.map((item) => (
        <FeaturedTalksItem
          key={item.talkSlug}
          eventName={item.eventName}
          talkSlug={item.talkSlug}
        />
      ))}
    </div>
  );
};

export default FeaturedTalksList;
