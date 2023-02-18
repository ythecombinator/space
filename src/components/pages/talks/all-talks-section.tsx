import { FunctionComponent, PropsWithChildren } from 'react';

import { isEmpty, reversedIndexOf } from 'utils/array';
import { useLyraSearch } from 'utils/search';

import EmptyList from 'components/shared/empty-list';
import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';

import AllTalksSectionItem, {
  AllTalksSectionItemProps,
} from 'components/pages/talks/all-talks-section-item';

/*~
 * TYPES
 */

export type AllTalksSectionProps = {
  items: Array<
    Omit<AllTalksSectionItemProps, 'index'> & {
      _description: string;
      _events: string;
      _tags: string;
      _cities: string;
      _countries: string;
    }
  >;
  searchTerm: string;
};

/*~
 * UTILS
 */

const searchSchema = {
  talkTitle: 'string',
  talkSlug: 'string',
  _description: 'string',
  _events: 'string',
  _tags: 'string',
  _cities: 'string',
  _countries: 'string',
} as const;

/*~
 * COMPONENT
 */

const AllTalksSection: FunctionComponent<
  PropsWithChildren<AllTalksSectionProps>
> = ({ items: baseItems, searchTerm }) => {
  const items = useLyraSearch(searchSchema, baseItems, searchTerm);

  return (
    <SectionContainer>
      <SectionHeading title="📚 All Sessions" />
      <div className="mb-6">
        {isEmpty(items) && (
          <EmptyList
            heading="No items found 😢"
            subHeading="I don't have any sessions on this topic."
          />
        )}
        {items.map((item, index) => {
          const { talkTitle, talkSlug } = item;
          return (
            <AllTalksSectionItem
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
