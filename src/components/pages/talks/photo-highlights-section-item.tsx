import { FunctionComponent, PropsWithChildren } from 'react';

import { FeaturedTalk } from 'services/content/talks';

import Link from 'components/shared/link';
import { randomElement } from 'utils/array';

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

const getGradientClass = () => {
  const gradients = [
    'bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600',
    'bg-gradient-to-tr from-blue-600 via-teal-500 to-purple-600',
    'bg-gradient-to-bl from-orange-500 via-pink-500 to-blue-600',
    'bg-gradient-to-r from-green-500 via-teal-500 to-blue-500',
    'bg-gradient-to-tl from-yellow-500 via-red-500 to-pink-500',
    'bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500',
    'bg-gradient-to-tr from-green-500 via-blue-500 to-purple-500',
    'bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500',
    'bg-gradient-to-bl from-blue-500 via-cyan-500 to-teal-500',
    'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500',
    'bg-gradient-to-tr from-green-500 via-yellow-500 to-orange-500',
    'bg-gradient-to-bl from-blue-500 via-indigo-500 to-violet-500',
  ];

  return randomElement(gradients);
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const PhotoHighlightsSectionItem: FunctionComponent<PropsWithChildren<FeaturedTalk>> = (props) => {
  const { photoURL, talkSlug, talkTitle, eventName, eventLocation } = props;

  return (
    <div className="group relative h-[280px] w-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0 z-10 bg-black/40"></div>
      <div className={`absolute inset-0 z-20 opacity-60 mix-blend-soft-light ${getGradientClass()}`}></div>
      <div
        className="absolute inset-0 z-30 bg-black/50 bg-[radial-gradient(#fff_1px,transparent_1px)] 
                      mix-blend-multiply [background-size:16px_16px]"
      ></div>
      <img
        src={photoURL}
        alt={eventName}
        className="absolute inset-0 z-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
      />
      <div className="relative z-40 flex h-full flex-col justify-end p-6">
        <span className="mb-2 text-sm text-gray-300">{eventLocation}</span>
        <Link key={talkSlug} href={talkSlug} className="block">
          <h3 className="mb-2 text-2xl font-bold text-white transition-colors duration-200 group-hover:text-gray-300">
            {eventName}
          </h3>
        </Link>
        <p className="text-sm text-gray-300">{talkTitle}</p>
      </div>
    </div>
  );
};

export default PhotoHighlightsSectionItem;
