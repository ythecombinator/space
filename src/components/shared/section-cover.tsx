import Image, { ImageProps } from 'next/image';
import { FunctionComponent, PropsWithChildren } from 'react';

type SectionCoverProps = Pick<ImageProps, 'src' | 'alt'>;

/*~
 * COMPONENT
 */

export const SectionCover: FunctionComponent<PropsWithChildren<SectionCoverProps>> = ({ src, alt }) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={700}
      height={475}
      sizes="100vw"
      className="h-auto w-full rounded-lg grayscale hover:grayscale-0"
    />
  );
};

export default SectionCover;
