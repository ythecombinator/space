import Image, { ImageProps } from 'next/image';
import { PropsWithChildren } from 'react';

import { viewTransitionProps } from 'utils/view-transition';

type SectionCoverProps = Pick<ImageProps, 'src' | 'alt'> & {
  /** Full view-transition-name, typically from vtKeys */
  transitionKey?: string;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

export function SectionCover({ src, alt, transitionKey }: PropsWithChildren<SectionCoverProps>) {
  return (
    <Image
      priority
      alt={alt}
      src={src}
      width={700}
      height={475}
      sizes="100vw"
      className="aspect-video w-full rounded-lg object-cover grayscale hover:grayscale-0"
      {...viewTransitionProps(transitionKey)}
    />
  );
}

export default SectionCover;
