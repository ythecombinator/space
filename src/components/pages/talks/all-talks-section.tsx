import { useTheme } from 'next-themes';
import { PropsWithChildren, useMemo, useState } from 'react';
import ContentLoader from 'react-content-loader';
import colors from 'tailwindcss/colors';

import { isEmpty, reversedIndexOf } from 'utils/array';
import { SearchProvider, useSearch } from 'utils/search';

import Chip from 'components/shared/chip';
import DropdownMenu from 'components/shared/dropdown-menu';
import EmptyList from 'components/shared/empty-list';
import OrderedListItem from 'components/shared/ordered-list-item';
import SearchBar, { SearchBarProps } from 'components/shared/seach-bar';
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
  _events: string[];
  _tags: string[];
  _cities: string[];
  _countries: string[];
};

export type AllTalksSectionProps = {
  items: Array<Schema>;
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
  _events: 'string[]',
  _tags: 'string[]',
  _cities: 'string[]',
  _countries: 'string[]',
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
//  UI: CORE
//  ---------------------------------------------------------------------------

function AllTalksSection({ items: baseItems }: PropsWithChildren<AllTalksSectionProps>) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['talk', 'workshop', 'panel']);

  const onChange: SearchBarProps['onChange'] = (evt) => {
    setSearchTerm(evt.target.value);
  };

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
        <SearchBar label="Search topics, events and places" onChange={onChange} />
      </div>
      <div className="mb-6">
        <SearchProvider schema={searchSchema} data={baseItems} fallback={<AllTalksListSkeleton items={3} />}>
          <AllTalksList searchTerm={searchTerm} selectedCategories={selectedCategories} />
        </SearchProvider>
      </div>
    </SectionContainer>
  );
}

export default AllTalksSection;

//  ---------------------------------------------------------------------------
//  UI: AllTalksList
//  ---------------------------------------------------------------------------

type AllTalksListProps = {
  searchTerm: string;
  selectedCategories: string[];
};

function AllTalksList({ searchTerm, selectedCategories }: AllTalksListProps) {
  const searchedItems = useSearch<Schema>(searchTerm);
  const items = searchedItems.filter((item) => selectedCategories.includes(item.talkCategory));

  if (isEmpty(items)) {
    return <EmptyList heading="No items found 😢" subHeading="I don't have any sessions on this topic." />;
  }

  return items.map(({ talkTitle, talkSlug, talkCategory }, index) => (
    <OrderedListItem
      key={talkSlug}
      label={talkTitle}
      index={reversedIndexOf(items.length, index)}
      href={talkSlug}
      prefix={renderPrefix(talkCategory)}
    />
  ));
}

//  ---------------------------------------------------------------------------
//  UI: AllTalksListSkeleton
//  ---------------------------------------------------------------------------

type AllTalksListSkeletonProps = {
  items: number;
};

function AllTalksListSkeleton({ items }: AllTalksListSkeletonProps) {
  const itemSkeletons = useMemo(() => Array.from(Array(items).keys()), [items]);
  const { theme } = useTheme();

  return (
    <div className="mb-6">
      {itemSkeletons.map((skeletonId) => {
        return (
          <div key={skeletonId} className="w-full border-b border-gray-200 py-3 dark:border-gray-700">
            <ContentLoader
              speed={1}
              viewBox="0 0 400 25"
              backgroundColor={theme === 'dark' ? colors.gray[800] : colors.gray[300]}
              foregroundColor={theme === 'dark' ? colors.gray[600] : colors.gray[100]}
            >
              <rect x="8" y="6" rx="4" ry="4" width="15" height="15" />
              <rect x="50" y="6" rx="4" ry="4" width="350" height="15" />
            </ContentLoader>
          </div>
        );
      })}
    </div>
  );
}
