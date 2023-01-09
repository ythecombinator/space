import { FC } from 'react';

import CardFeatured from 'components/shared/CardFeatured';

/*~
 * TYPES
 */

export type FeaturedTalksItemProps = {
  talkTitle: string;
  talkSlug: string;
  talkHeadline: string;
};

/*~
 * COMPONENT
 */

const FeaturedTalksItem: FC<FeaturedTalksItemProps> = (props) => {
  const { talkTitle, talkSlug, talkHeadline } = props;

  return (
    <CardFeatured
      title={talkTitle}
      description={talkHeadline}
      href={talkSlug}
      className="py-4 md:px-4"
    />
  );
};

export default FeaturedTalksItem;
