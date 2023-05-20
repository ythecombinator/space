import Image from 'next/image';
import { FunctionComponent, PropsWithChildren } from 'react';
import { FiMapPin } from 'react-icons/fi';

import { siteMetadata } from 'config/constants';

import Link from 'components/shared/link';

/*~
 * TYPES
 */

interface CurrentLocationProps {
  href: string;
  location: string;
  locationImage: string;
}

/*~
 * COMPONENT
 */

const CurrentLocation: FunctionComponent<
  PropsWithChildren<CurrentLocationProps>
> = ({ href, location, locationImage }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="bg-gray-900 text-black p-5 rounded-xl relative shadow overflow-hidden min-h-[20rem] min-w-[20rem] flex items-center justify-center"
    >
      <Image
        className="absolute inset-0 m-auto object-cover"
        alt={location}
        src={locationImage}
        priority
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="border-4 w-32 h-32 bg-[#435674]/60 border-white/70 rounded-full z-10 flex items-center justify-center">
        <Image
          className="p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src={siteMetadata.avatar}
          alt={`Avatar of ${siteMetadata.author}`}
          width={100}
          height={100}
        />
      </div>
      <div className="absolute bottom-0 right-0 bg-black/20 dark:bg-white/10 backdrop-filter backdrop-blur-lg backdrop-saturate-150 py-1 px-2 rounded-tl-lg flex items-center space-x-1 text-black/40 dark:text-white/60">
        <FiMapPin />
        <span className="text-sm">{location}</span>
      </div>
    </Link>
  );
};

export default CurrentLocation;
