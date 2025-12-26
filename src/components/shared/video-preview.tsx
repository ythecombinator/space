import Image from 'next/image';
import { FaEye, FaPlay, FaRegThumbsUp } from 'react-icons/fa';

import { YoutubeHighlight } from 'services/content/talks';

import { classNames } from 'utils/styles';

import Link from 'components/shared/link';
import Typography from 'components/shared/typography';

interface VideoPreviewProps extends YoutubeHighlight {
  className?: string;
  width?: number;
  height?: number;
}

export function VideoPreview({
  className,
  width,
  height,
  link,
  title,
  thumbnail,
  likeCount,
  viewCount,
}: VideoPreviewProps) {
  return (
    <div className={classNames('group space-y-3', className)}>
      <Link href={link} rel="nofollow" className="relative block overflow-hidden rounded-xl">
        <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-900">
          <Image
            src={thumbnail}
            alt={title}
            width={width}
            height={height}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 opacity-0 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
              <FaPlay className="ml-1 text-white" size={24} />
            </div>
          </div>

          {/* Stats overlay on hover */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-3 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex items-center space-x-1 text-sm font-medium">
              <FaEye size={14} />
              <span>{viewCount}</span>
            </div>
            <div className="flex items-center space-x-1 text-sm font-medium">
              <FaRegThumbsUp size={14} />
              <span>{likeCount}</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="space-y-2 px-1">
        <Typography.h3 className="line-clamp-2 font-medium leading-tight transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400">
          {title}
        </Typography.h3>
        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <FaEye size={14} />
            <span>{viewCount}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FaRegThumbsUp size={14} />
            <span>{likeCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
