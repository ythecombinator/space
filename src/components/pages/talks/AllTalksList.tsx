import { FC } from 'react';

import SectionContainer from 'components/shared/SectionContainer';
import SectionHeading from 'components/shared/SectionHeading';

import AllTalksItem, {
  AllTalksItemProps,
} from 'components/pages/talks/AllTalksItem';

/*~
 * TYPES
 */

export type AllTalksListProps = {
  items: Array<AllTalksItemProps>;
};

/*~
 * COMPONENT
 */

const AllTalksList: FC<AllTalksListProps> = (props) => {
  const { items } = props;

  return (
    <SectionContainer>
      <SectionHeading title="All Sessions" />
      <div className="mb-6">
        {items.map((item) => {
          const { title, headline, slug, tags } = item;
          return <AllTalksItem title={title} />;
        })}
      </div>
    </SectionContainer>
  );
};

export default AllTalksList;
