import Image, { ImageProps } from 'next/image';
import { FunctionComponent, PropsWithChildren } from 'react';

type SectionCoverProps = Pick<ImageProps, 'src' | 'alt'>;

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

export const SectionCover: FunctionComponent<PropsWithChildren<SectionCoverProps>> = ({ src, alt }) => {
  return (
    <Image
      priority
      alt={alt}
      src={src}
      width={700}
      height={475}
      sizes="100vw"
      className="aspect-video w-full rounded-lg object-cover grayscale hover:grayscale-0"
    />
  );
};

export default SectionCover;
