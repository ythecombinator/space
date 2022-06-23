import { Flex } from '@chakra-ui/react';
import { FC, useMemo } from 'react';

import { shuffleItems } from 'utils/array';

import FeaturedTalksItem, { FeaturedTalksItemProps } from './FeaturedTalksItem';

/*~
 * TYPES
 */

export type FeaturedTalksListProps = {
  items: Array<FeaturedTalksItemProps>;
};

/*~
 * COMPONENT
 */

const FeaturedTalksList: FC<FeaturedTalksListProps> = (props) => {
  const allItems = props.items;
  const items = useMemo(() => shuffleItems(allItems).slice(0, 9), []);

  return (
    <Flex
      wrap="wrap"
      position="relative"
      width="100vw"
      left="50%"
      marginTop="1rem"
      marginLeft="-50vw"
    >
      {items.map((item) => (
        <FeaturedTalksItem
          key={item.talkTitle}
          eventName={item.eventName}
          talkTitle={item.talkTitle}
          talkSlug={item.talkSlug}
          photo={item.photo}
        />
      ))}
    </Flex>
  );
};

export default FeaturedTalksList;
