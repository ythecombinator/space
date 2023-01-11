import { FC } from 'react';

import { reversedIndexOf } from 'utils/array';

import SectionContainer from 'components/shared/SectionContainer';
import SectionHeading from 'components/shared/SectionHeading';

import AllTalksItem, {
  AllTalksItemProps,
} from 'components/pages/talks/AllTalksItem';

/*~
 * TYPES
 */

export type AllTalksListProps = {
  items: Array<Omit<AllTalksItemProps, 'index'>>;
};

/*~
 * COMPONENT
 */

const AllTalksList: FC<AllTalksListProps> = (props) => {
  const { items } = props;

  return (
    <SectionContainer>
      <SectionHeading title="All Sessions" />
      <div className="mb-6">
        {items.map((item, index) => {
          const { talkTitle, talkSlug } = item;
          return (
            <AllTalksItem
              talkTitle={talkTitle}
              talkSlug={talkSlug}
              index={reversedIndexOf(items.length, index)}
            />
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default AllTalksList;
