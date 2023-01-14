import { FC } from 'react';

import { reversedIndexOf } from 'utils/array';
import { useLyraSearch } from 'utils/search';

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

/*~
 * COMPONENT
 */

const AllTalksSection: FC<AllTalksSectionProps> = ({ items, query }) => {
  const data = useLyraSearch(
    {
      talkTitle: 'string',
      talkSlug: 'string',
    },
    items,
    query
  );
  console.log('data', data);

  return (
    <SectionContainer>
      <SectionHeading title="📚 All Sessions" />
      <div className="mb-6">
        {data.map((item, index) => {
          const { talkTitle, talkSlug } = item;
          return (
            <AllTalksItem
              key={talkSlug}
              talkTitle={talkTitle}
              talkSlug={talkSlug}
              index={reversedIndexOf(data.length, index)}
            />
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default AllTalksSection;
