import { Flex } from '@chakra-ui/react';
import { FC, useMemo } from 'react';

import { shuffleItems } from 'utils/array';

import SectionContainer from 'components/shared/SectionContainer';
import SectionHeading from 'components/shared/SectionHeading';

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
  const items = useMemo(() => allItems.slice(0, 2), []);

  return (
    <SectionContainer>
      <SectionHeading title="YouTube Highlights" />
      <div className="pb-2 w-full flex flex-wrap">
        {items.map((item) => (
          <FeaturedTalksItem
            key={item.talkTitle}
            talkTitle={item.talkTitle}
            talkHeadline={'Headline'}
            talkSlug={item.talkSlug}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FeaturedTalksList;
