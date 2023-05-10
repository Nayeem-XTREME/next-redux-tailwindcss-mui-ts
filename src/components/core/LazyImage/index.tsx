'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

type ImageComponentProps = ImageProps & {
  blur?: boolean;
};

const ImageComponent = ({
  alt,
  blur,
  className,
  ...rest
}: ImageComponentProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  const blurTransition =
    ' duration-500 ease-in-out' +
    (loading ? ' scale-110 blur-2xl' : ' scale-100 blur-0');

  return (
    <Image
      alt={alt}
      className={(className ? className : '') + (blur ? blurTransition : '')}
      {...(blur && {
        onLoadingComplete: () => setLoading(false),
      })}
      {...rest}
    />
  );
};

export default ImageComponent;
