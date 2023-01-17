import { FC, useMemo } from 'react';

import SectionContainer from 'components/shared/SectionContainer';
import SectionHeading from 'components/shared/SectionHeading';

import AllPostsItemSkeleton from './AllPostsItem.skeleton';

/*~
 * TYPES
 */

export type AllPostsSectionSkeletonProps = {
  items: number;
};

/*~
 * COMPONENT
 */

const AllPostsSectionSkeleton: FC<AllPostsSectionSkeletonProps> = ({
  items,
}) => {
  const itemSkeletons = useMemo(() => Array.from(Array(items).keys()), [items]);

  return (
    <SectionContainer>
      <ul>
        {itemSkeletons.map((skeletonId) => {
          return <AllPostsItemSkeleton key={skeletonId} />;
        })}
      </ul>
    </SectionContainer>
  );
};

export default AllPostsSectionSkeleton;
