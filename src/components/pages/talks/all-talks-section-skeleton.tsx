import { FunctionComponent, useMemo } from 'react';

import SectionContainer from 'components/shared/section-container';
import SectionHeading from 'components/shared/section-heading';

import AllTalksSectionItemSkeleton from 'components/pages/talks/all-talks-section-item-skeleton';

/*~
 * TYPES
 */

export type AllTalksSectionSkeletonProps = {
  items: number;
};

/*~
 * COMPONENT
 */

const AllTalksSectionSkeleton: FunctionComponent<
  AllTalksSectionSkeletonProps
> = ({ items }) => {
  const itemSkeletons = useMemo(() => Array.from(Array(items).keys()), [items]);

  return (
    <SectionContainer>
      <SectionHeading title="📚 All Sessions" />
      <div className="mb-6">
        {itemSkeletons.map((skeletonId) => {
          return <AllTalksSectionItemSkeleton key={skeletonId} />;
        })}
      </div>
    </SectionContainer>
  );
};

export default AllTalksSectionSkeleton;
