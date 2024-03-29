import { FunctionComponent, PropsWithChildren, useMemo } from 'react';

import SectionContainer from 'components/shared/section-container';

import AllPostsSectionItemSkeleton from 'components/pages/posts/all-posts-section-item-skeleton';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type AllPostsSectionSkeletonProps = {
  items: number;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const AllPostsSectionSkeleton: FunctionComponent<PropsWithChildren<AllPostsSectionSkeletonProps>> = ({ items }) => {
  const itemSkeletons = useMemo(() => Array.from(Array(items).keys()), [items]);

  return (
    <SectionContainer>
      <ul>
        {itemSkeletons.map((skeletonId) => {
          return <AllPostsSectionItemSkeleton key={skeletonId} />;
        })}
      </ul>
    </SectionContainer>
  );
};

export default AllPostsSectionSkeleton;
