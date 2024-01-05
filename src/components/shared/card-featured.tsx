import { FunctionComponent, PropsWithChildren } from 'react';

import Link from 'components/shared/link';
import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export interface CardFeaturedProps {
  title: string;
  description: string;
  href: string;
  className?: string;
  fullWidth?: boolean;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const CardFeatured: FunctionComponent<PropsWithChildren<CardFeaturedProps>> = ({
  title,
  description,
  href,
  className,
  fullWidth = true,
}) => {
  return (
    <div className={`${fullWidth && 'w-full md:w-1/2'} ${className} overflow-hidden`}>
      <div
        className={`-z-10 h-full rounded-md bg-gradient-to-r from-[#37CCE5] via-[#3775e5] to-[#37e5a7] p-0.5 dark:p-px`}
      >
        <Link href={href} aria-label={`Link to ${title}`}>
          <div
            className={`relative z-20 h-full overflow-hidden rounded-md bg-violet-30
          will-change-transform after:pointer-events-none after:absolute after:inset-0 after:z-10 after:bg-texture-pattern after:bg-cover
          after:bg-no-repeat after:opacity-0 after:mix-blend-hard-light after:transition-opacity after:duration-500
          after:will-change-auto hover:after:animate-hue hover:after:opacity-100 dark:bg-violet-950`}
          >
            <div className="p-5">
              <h2 className="mb-2 text-2xl font-bold leading-8 tracking-tight">{title}</h2>
              <Typography.p>{description}</Typography.p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardFeatured;
