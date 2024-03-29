import { FunctionComponent, PropsWithChildren } from 'react';

import { isEmpty, reversedIndexOf } from 'utils/array';
import { useSearch } from 'utils/search';

import EmptyList from 'components/shared/empty-list';
import OrderedListItem from 'components/shared/ordered-list-item';
import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

type Schema = {
  talkSlug: string;
  talkTitle: string;
  talkCategory: string;
  _description: string;
  _events: string;
  _tags: string;
  _cities: string;
  _countries: string;
};

export type AllTalksSectionProps = {
  items: Array<Schema>;
  searchTerm: string;
};

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

const searchSchema = {
  talkTitle: 'string',
  talkSlug: 'string',
  talkCategory: 'string',
  _description: 'string',
  _events: 'string',
  _tags: 'string',
  _cities: 'string',
  _countries: 'string',
} as const;

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const AllTalksSection: FunctionComponent<PropsWithChildren<AllTalksSectionProps>> = ({
  items: baseItems,
  searchTerm,
}) => {
  const items = useSearch<typeof searchSchema, Schema>(searchSchema, baseItems, searchTerm);

  return (
    <SectionContainer>
      <SectionHeading title="All Sessions" />
      <div className="mb-6">
        {isEmpty(items) && (
          <EmptyList heading="No items found 😢" subHeading="I don't have any sessions on this topic." />
        )}
        {items.map((item, index) => {
          const { talkTitle, talkSlug, talkCategory } = item;
          return (
            <OrderedListItem
              key={talkSlug}
              label={talkTitle}
              index={reversedIndexOf(items.length, index)}
              href={talkSlug}
              prefix={talkCategory === 'workshop' ? 'workshop' : null}
            />
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default AllTalksSection;
