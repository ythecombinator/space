import Image from 'next/image';
import { FunctionComponent, PropsWithChildren } from 'react';
import { FiMapPin } from 'react-icons/fi';

import { siteMetadata } from 'config/constants';

import Link from 'components/shared/link';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface CurrentLocationProps {
  href: string;
  location: string;
  locationImage: string;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const CurrentLocation: FunctionComponent<PropsWithChildren<CurrentLocationProps>> = ({
  href,
  location,
  locationImage,
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="relative flex min-h-[20rem] min-w-[20rem] items-center justify-center overflow-hidden rounded-xl bg-gray-900 p-5 text-black shadow"
    >
      <Image
        className="absolute inset-0 m-auto object-cover"
        alt={location}
        src={locationImage}
        priority
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="z-10 flex h-32 w-32 items-center justify-center rounded-full border-4 border-white/70 bg-[#37CCE5]/60">
        <Image
          className="rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500"
          src="/content/misc/avatar.jpg"
          alt={`Avatar of ${siteMetadata.author}`}
          width={100}
          height={100}
        />
      </div>
      <div className="absolute bottom-0 right-0 flex items-center space-x-1 rounded-tl-lg bg-black/20 px-2 py-1 text-black/40 backdrop-blur-lg backdrop-saturate-150 dark:bg-white/10 dark:text-white/60">
        <FiMapPin />
        <span className="text-sm">{location}</span>
      </div>
    </Link>
  );
};

export default CurrentLocation;
