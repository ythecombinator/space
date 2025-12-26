import { FunctionComponent, PropsWithChildren } from 'react';

import { YoutubeHighlight } from 'services/content/talks';

import { VideoPreview } from 'components/shared/video-preview';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type YoutubeHighlightsSectionItemProps = YoutubeHighlight;

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const YoutubeHighlightsSectionItem: FunctionComponent<PropsWithChildren<YoutubeHighlightsSectionItemProps>> = (
  props
) => {
  return <VideoPreview className="w-[320px]" width={320} height={180} {...props} />;
};

export default YoutubeHighlightsSectionItem;
