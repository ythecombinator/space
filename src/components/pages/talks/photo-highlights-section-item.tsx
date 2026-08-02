import { useTheme } from 'next-themes';
import { PropsWithChildren, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { FeaturedTalk } from 'services/content/talks';

import { randomElement } from 'utils/array';
import { classNames } from 'utils/styles';
import { viewTransitionProps, vtKeys } from 'utils/view-transition';

import Link from 'components/shared/link';
import Typography from 'components/shared/typography';
import ViewTransitionTarget from 'components/shared/view-transition-target';

import PhotoHighlightsSectionItemSkeleton from 'components/pages/talks/photo-highlights-section-item-skeleton';

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

const getGradientClass = () => {
  const gradients = [
    'from-purple-700 via-pink-600 to-blue-700',
    'from-blue-700 via-teal-600 to-purple-700',
    'from-orange-600 via-pink-600 to-blue-700',
    'from-green-600 via-teal-600 to-blue-600',
    'from-yellow-600 via-red-600 to-pink-600',
    'from-indigo-600 via-purple-600 to-pink-600',
    'from-green-600 via-blue-600 to-purple-600',
    'from-red-600 via-orange-600 to-yellow-600',
    'from-blue-600 via-cyan-600 to-teal-600',
    'from-purple-600 via-pink-600 to-red-600',
    'from-green-600 via-yellow-600 to-orange-600',
    'from-blue-600 via-indigo-600 to-violet-600',
    'from-rose-600 via-pink-600 to-fuchsia-600',
    'from-emerald-600 via-green-600 to-teal-600',
    'from-amber-600 via-orange-600 to-yellow-600',
    'from-sky-600 via-blue-600 to-indigo-600',
    'from-violet-600 via-purple-600 to-indigo-600',
    'from-lime-600 via-green-600 to-emerald-600',
    'from-fuchsia-600 via-pink-600 to-rose-600',
    'from-cyan-600 via-teal-600 to-sky-600',
    'from-orange-600 via-amber-600 to-yellow-600',
    'from-indigo-600 via-blue-600 to-cyan-600',
    'from-red-600 via-rose-600 to-pink-600',
    'from-teal-600 via-cyan-600 to-sky-600',
  ];

  return randomElement(gradients);
};

function isLoadedImage(img: HTMLImageElement, photoURL: string) {
  if (!img.complete || img.naturalWidth === 0) {
    return false;
  }

  try {
    return img.currentSrc === new URL(photoURL, window.location.href).href;
  } catch {
    return false;
  }
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function PhotoHighlightsSectionItem(props: PropsWithChildren<FeaturedTalk>) {
  const { photoURL, talkSlug, talkTitle, eventName, eventLocation } = props;
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  const imgRef = useRef<HTMLImageElement>(null);
  const isMountedRef = useRef(true);
  const photoURLRef = useRef(photoURL);
  const [isLoaded, setIsLoaded] = useState(false);
  const gradientClass = useMemo(() => getGradientClass(), []);

  photoURLRef.current = photoURL;

  const setLoadedSafe = useCallback((loaded: boolean) => {
    if (isMountedRef.current) {
      setIsLoaded(loaded);
    }
  }, []);

  const markLoadedIfReady = useCallback(() => {
    const img = imgRef.current;

    if (!isMountedRef.current || !img || !isLoadedImage(img, photoURLRef.current)) {
      return;
    }

    setLoadedSafe(true);
  }, [setLoadedSafe]);

  const handleImageError = useCallback(() => {
    setLoadedSafe(true);
  }, [setLoadedSafe]);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    setLoadedSafe(false);
    markLoadedIfReady();
  }, [photoURL, markLoadedIfReady, setLoadedSafe]);

  return (
    <Link href={talkSlug} className="block no-underline hover:no-underline" clearDecoration>
      <ViewTransitionTarget as="div" name={vtKeys.talkCard(talkSlug)} className="rounded-2xl">
        <div className="group relative h-[280px] w-full overflow-hidden rounded-2xl text-white">
          {!isLoaded && (
            <div className="absolute inset-0 z-0">
              <PhotoHighlightsSectionItemSkeleton />
            </div>
          )}

          <img
            ref={imgRef}
            src={photoURL}
            alt={eventName}
            loading="lazy"
            decoding="async"
            onLoad={markLoadedIfReady}
            onError={handleImageError}
            className={classNames(
              'absolute inset-0 z-0 h-full w-full object-cover object-center transition-[opacity,transform] duration-500 group-hover:scale-110',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
          />

          <div
            className={classNames(
              'absolute inset-0 z-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] transition-opacity duration-500',
              isDarkMode ? 'bg-black/50' : 'bg-gray-600/10',
              isLoaded ? 'opacity-50' : 'opacity-0'
            )}
          />
          <div
            className={classNames(
              'absolute inset-0 z-10 transition-opacity duration-500',
              isLoaded ? 'opacity-100' : 'opacity-0',
              isDarkMode ? 'bg-black/30' : 'bg-white/30'
            )}
          />
          <div
            className={classNames(
              `absolute inset-0 bg-gradient-to-br ${gradientClass} z-20 transition-opacity duration-500`,
              isLoaded ? 'opacity-20' : 'opacity-0'
            )}
          />
          <div
            className={classNames(
              'absolute inset-0 z-40 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-500',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
          />

          <div
            className={classNames(
              'relative z-50 flex h-full flex-col justify-end p-6 transition-opacity duration-500',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
          >
            <span
              className="font-medium text-white underline-offset-2 hover:underline"
              {...viewTransitionProps(vtKeys.talkTitle(talkSlug))}
            >
              {talkTitle}
            </span>
            <Typography.h3>{eventName}</Typography.h3>
            <Typography.subtle className="text-white">{eventLocation}</Typography.subtle>
          </div>
        </div>
      </ViewTransitionTarget>
    </Link>
  );
}

export default PhotoHighlightsSectionItem;
