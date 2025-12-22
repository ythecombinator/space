import Image, { ImageProps } from 'next/image';
import { PropsWithChildren } from 'react';

type SectionCoverProps = Pick<ImageProps, 'src' | 'alt'>;

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

export function SectionCover({ src, alt }: PropsWithChildren<SectionCoverProps>) {
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
}

export default SectionCover;
