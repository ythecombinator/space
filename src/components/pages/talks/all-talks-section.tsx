import { FunctionComponent, PropsWithChildren, useState } from 'react';

import { isEmpty, reversedIndexOf } from 'utils/array';
import { useSearch } from 'utils/search';

import Chip from 'components/shared/chip';
import DropdownMenu from 'components/shared/dropdown-menu';
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

const SESSION_TYPE_FILTERS = [
  { label: 'Talk', id: 'talk' },
  { label: 'Workshop', id: 'workshop' },
  { label: 'Panel', id: 'panel' },
];

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

function renderPrefix(talkCategory: string) {
  if (talkCategory === 'workshop') {
    return <Chip variant="default">Workshop</Chip>;
  }

  if (talkCategory === 'panel') {
    return <Chip variant="secondary">Panel</Chip>;
  }

  return null;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const AllTalksSection: FunctionComponent<PropsWithChildren<AllTalksSectionProps>> = ({
  items: baseItems,
  searchTerm,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['talk', 'workshop', 'panel']);
  const searchedItems = useSearch<typeof searchSchema, Schema>(searchSchema, baseItems, searchTerm);
  
  const items = searchedItems.filter((item) => selectedCategories.includes(item.talkCategory));

  return (
    <SectionContainer>
      <div className="mb-6 flex items-center justify-between">
        <SectionHeading title="All Sessions" />
        <DropdownMenu
          label="Session Type"
          items={SESSION_TYPE_FILTERS}
          multiSelect
          initialSelectedItems={selectedCategories}
          onMultiSelect={setSelectedCategories}
        />
      </div>
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
              prefix={renderPrefix(talkCategory)}
            />
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default AllTalksSection;
