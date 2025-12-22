import Image from 'next/image';
import { FaEye, FaRegThumbsUp } from 'react-icons/fa';

import { YoutubeHighlight } from 'services/content/talks';

import { classNames } from 'utils/styles';

import CardOutlinedListItem from 'components/shared/card-outlined-list-item';
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
    <div className={classNames('space-y-3', className)}>
      <div className="overflow-hidden rounded-md">
        <Link href={link} rel="nofollow">
          <Image
            src={thumbnail}
            alt={title}
            width={width}
            height={height}
            className={classNames('h-auto w-auto object-cover transition-all hover:scale-125', 'aspect-[3/2]')}
          />
        </Link>
      </div>
      <Typography.h3 className="font-medium">{title}</Typography.h3>
      <div className="flex space-x-6">
        <CardOutlinedListItem icon={<FaEye size={20} aria-hidden />}>{viewCount}</CardOutlinedListItem>
        <CardOutlinedListItem icon={<FaRegThumbsUp size={20} aria-hidden />}>{likeCount}</CardOutlinedListItem>
      </div>
    </div>
  );
}
