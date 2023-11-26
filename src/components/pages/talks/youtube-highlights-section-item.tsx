import { FunctionComponent, PropsWithChildren } from 'react';

import { YoutubeHighlight } from 'services/content/talks';

import { VideoPreview } from 'components/shared/video-preview';

/*~
 * TYPES
 */

export type YoutubeHighlightsSectionItemProps = YoutubeHighlight;

/*~
 * COMPONENT
 */

const YoutubeHighlightsSectionItem: FunctionComponent<PropsWithChildren<YoutubeHighlightsSectionItemProps>> = (
  props
) => {
  return <VideoPreview className="w-[250px]" width={250} height={250} {...props} />;
};

export default YoutubeHighlightsSectionItem;
