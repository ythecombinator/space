import { useSpring, animated, config } from '@react-spring/web';
import { FunctionComponent, PropsWithChildren, useRef, useState } from 'react';

import Link from 'components/shared/link';
import Typography from 'components/shared/typography';

/*~
 * TYPES
 */

export interface CardFeaturedProps {
  title: string;
  description: string;
  href: string;
  className?: string;
  fullWidth?: boolean;
}

/*~
 * UTILS
 */

const calc = (x: number, y: number, rect: DOMRect) => [
  -(y - rect.top - rect.height / 2) / 20,
  (x - rect.left - rect.width / 2) / 20,
  1.01,
];

const trans = (x: number, y: number, scale: number) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${scale})`;

/*~
 * COMPONENT
 */

const CardFeatured: FunctionComponent<PropsWithChildren<CardFeaturedProps>> = ({
  title,
  description,
  href,
  className,
  fullWidth = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [xys, set] = useState([0, 0, 1]);
  const props = useSpring({ xys, config: config.molasses });

  return (
    <div
      className={`${
        fullWidth && 'w-full md:w-1/2'
      } ${className} overflow-hidden`}
      ref={ref}
    >
      <div
        className={`-z-10 h-full rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5 dark:p-px`}
      >
        <Link href={href} aria-label={`Link to ${title}`}>
          <animated.div
            style={{ transform: props.xys.to(trans) }}
            onMouseLeave={() => set([0, 0, 1])}
            onMouseMove={(e) => {
              const rect = ref.current?.getBoundingClientRect()!;
              set(calc(e.clientX, e.clientY, rect));
            }}
            className={`relative z-20 h-full overflow-hidden rounded-md bg-violet-30
          will-change-transform after:pointer-events-none after:absolute after:inset-0 after:z-10 after:bg-texture-pattern after:bg-cover
          after:bg-no-repeat after:opacity-0 after:mix-blend-hard-light after:transition-opacity after:duration-500
          after:will-change-auto hover:after:animate-hue hover:after:opacity-100 dark:bg-violet-950`}
          >
            <div className="p-5">
              <h2 className="mb-2 text-2xl font-bold leading-8 tracking-tight">
                {title}
              </h2>
              <Typography.p>{description}</Typography.p>
              <div className="text-2xl font-thin leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                <svg
                  className="rotate-180"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6.75 8.75V17.25H15.25"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7 17L17.25 6.75"
                  />
                </svg>
              </div>
            </div>
          </animated.div>
        </Link>
      </div>
    </div>
  );
};

export default CardFeatured;
