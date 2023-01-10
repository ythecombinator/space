import { FC } from 'react';

import CardFeatured from 'components/shared/CardFeatured';

/*~
 * TYPES
 */

export type FeaturedTalksItemProps = {
  talkTitle: string;
  talkSlug: string;
  eventName: string;
};

/*~
 * COMPONENT
 */

const FeaturedTalksItem: FC<FeaturedTalksItemProps> = (props) => {
  const { talkTitle, talkSlug, eventName } = props;

  return (
    <CardFeatured
      title={talkTitle}
      description={eventName}
      href={talkSlug}
      className="py-4 md:px-4"
    />
  );
};

export default FeaturedTalksItem;
