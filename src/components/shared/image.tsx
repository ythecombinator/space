import NextImage from 'next/image';
import React, { ComponentPropsWithoutRef, useState } from 'react';

import { classNames } from 'utils/styles';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type ImageProps = {
  containerClassName?: string;
  imageClassName?: string;
  lazy?: boolean;
} & ComponentPropsWithoutRef<typeof NextImage>;

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const Image = (props: ImageProps) => {
  const { alt, src, containerClassName, imageClassName, lazy = true, ...rest } = props;
  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={classNames('overflow-hidden', isLoading && 'animate-pulse', containerClassName)}
      data-testid="image-container"
    >
      <NextImage
        className={classNames(
          'transition-[scale,filter] duration-700',
          isLoading && 'scale-[1.02] blur-xl grayscale',
          imageClassName
        )}
        src={src}
        alt={alt}
        loading={lazy ? 'lazy' : undefined}
        priority={!lazy}
        quality={100}
        onLoad={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};
export default Image;
