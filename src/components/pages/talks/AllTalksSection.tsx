import { FC } from 'react';

import { isEmpty, reversedIndexOf } from 'utils/array';
import { useLyraSearch } from 'utils/search';

import EmptyList from 'components/shared/EmptyList';
import SectionContainer from 'components/shared/SectionContainer';
import SectionHeading from 'components/shared/SectionHeading';

import AllTalksItem, {
  AllTalksItemProps,
} from 'components/pages/talks/AllTalksItem';

/*~
 * TYPES
 */

export type AllTalksSectionProps = {
  items: Array<Omit<AllTalksItemProps, 'index'>>;
  query: string;
};

const searchSchema = {
  talkTitle: 'string',
  talkSlug: 'string',
} as const;

/*~
 * COMPONENT
 */

const AllTalksSection: FC<AllTalksSectionProps> = ({
  items: baseItems,
  query,
}) => {
  const items = useLyraSearch(searchSchema, baseItems, query);
  console.log('AllTalksSection items', items);
  console.log('AllTalksSection baseItems', baseItems);

  return (
    <SectionContainer>
      <SectionHeading title="📚 All Sessions" />
      <div className="mb-6">
        {isEmpty(items) && (
          <EmptyList
            heading="No items found 😢"
            subHeading="I don't have any sessions on this topic. In the future they, will appear here."
          />
        )}
        {items.map((item, index) => {
          const { talkTitle, talkSlug } = item;
          return (
            <AllTalksItem
              key={talkSlug}
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

export default AllTalksSection;
