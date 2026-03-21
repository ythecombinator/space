import { FunctionComponent, PropsWithChildren } from 'react';

import { isEmpty } from 'utils/array';
import { SearchProvider, useSearch } from 'utils/search';

import EmptyList from 'components/shared/empty-list';
import SectionContainer from 'components/shared/section-container';

import AllPostsSectionItem, { AllPostsSectionItemProps } from 'components/pages/posts/all-posts-section-item';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

type PostDocument = Omit<AllPostsSectionItemProps, 'index'> & { _tags: string[] };

export type AllPostsSectionProps = {
  items: Array<PostDocument>;
  searchTerm: string;
};

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

const searchSchema = {
  title: 'string',
  slug: 'string',
  summary: 'string',
  _tags: 'string[]',
} as const;

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const AllPostsSection: FunctionComponent<PropsWithChildren<AllPostsSectionProps>> = ({
  items,
  searchTerm,
}) => (
  <SearchProvider schema={searchSchema} data={items}>
    <AllPostsList searchTerm={searchTerm} />
  </SearchProvider>
);

export default AllPostsSection;

function AllPostsList({ searchTerm }: { searchTerm: string }) {
  const items = useSearch<PostDocument>(searchTerm);

  return (
    <SectionContainer>
      {isEmpty(items) && <EmptyList heading="No items found 😢" subHeading="I don't have any posts on this topic." />}
      <ul>
        {items.map((item) => (
          <AllPostsSectionItem key={item.slug} {...item} />
        ))}
      </ul>
    </SectionContainer>
  );
}
