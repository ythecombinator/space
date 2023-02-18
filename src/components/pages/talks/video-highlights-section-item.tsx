import { FunctionComponent, PropsWithChildren } from 'react';

import CardFeatured from 'components/shared/card-featured';

/*~
 * TYPES
 */

export type VideoHighlightsSectionItemProps = {
  talkTitle: string;
  talkSlug: string;
  eventName: string;
};

/*~
 * COMPONENT
 */

const VideoHighlightsSectionItem: FunctionComponent<
  PropsWithChildren<VideoHighlightsSectionItemProps>
> = (props) => {
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

export default VideoHighlightsSectionItem;
