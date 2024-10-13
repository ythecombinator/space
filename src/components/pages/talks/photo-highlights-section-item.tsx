import { useTheme } from 'next-themes';
import { FunctionComponent, PropsWithChildren } from 'react';

import { FeaturedTalk } from 'services/content/talks';

import { randomElement } from 'utils/array';

import Typography from 'components/shared/typography';

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

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const PhotoHighlightsSectionItem: FunctionComponent<PropsWithChildren<FeaturedTalk>> = (props) => {
  const { photoURL, talkSlug, talkTitle, eventName, eventLocation } = props;
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  return (
    <div className="group relative h-[280px] w-full overflow-hidden rounded-2xl text-white">
      <img
        src={photoURL}
        alt={eventName}
        className="absolute inset-0 z-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
      />

      <div
        className={`absolute inset-0 opacity-50 ${isDarkMode ? 'bg-black/50' : 'bg-gray-600/10'} z-5 
                bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]`}
      ></div>
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/30' : 'bg-white/30'} z-10`}></div>
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradientClass()} z-20 opacity-20`}></div>

      <div className="absolute inset-0 z-40 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      <div className="relative z-50 flex h-full flex-col justify-end p-6">
        <Typography.a href={talkSlug}>{talkTitle}</Typography.a>
        <Typography.h3>{eventName}</Typography.h3>
        <Typography.subtle className="text-white">{eventLocation}</Typography.subtle>
      </div>
    </div>
  );
};

export default PhotoHighlightsSectionItem;
