import { FC, useMemo } from 'react';

import SectionContainer from 'components/shared/SectionContainer';
import SectionHeading from 'components/shared/SectionHeading';

import AllTalksItemSkeleton from './AllTalksItem.skeleton';

/*~
 * TYPES
 */

export type AllTalksSectionSkeletonProps = {
  items: number;
};

/*~
 * COMPONENT
 */

const AllTalksSectionSkeleton: FC<AllTalksSectionSkeletonProps> = ({
  items,
}) => {
  const itemSkeletons = useMemo(() => Array.from(Array(items).keys()), [items]);

  return (
    <SectionContainer>
      <SectionHeading title="📚 All Sessions" />
      <div className="mb-6">
        {itemSkeletons.map((skeletonId) => {
          return <AllTalksItemSkeleton key={skeletonId} />;
        })}
      </div>
    </SectionContainer>
  );
};

export default AllTalksSectionSkeleton;
