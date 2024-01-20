import { PropsWithChildren } from 'react';
import { FaReddit } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

import { socialNetworksMap } from 'config/constants';

import Link from 'components/shared/link';

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function SocialShare({
  href,
  platform,
}: PropsWithChildren<{ href: string; platform: keyof typeof socialNetworksMap | 'Reddit' }>) {
  let Icon: IconType;

  if (platform === 'Reddit') {
    Icon = FaReddit;
  } else {
    Icon = socialNetworksMap[platform].Icon;
  }

  return (
    <Link
      href={href}
      className="p-4 text-gray-400 transition hover:scale-105 hover:text-gray-100"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon />
      <span className="sr-only">Share on {platform}</span>
    </Link>
  );
}

export default SocialShare;
