import Lottie from 'lottie-react';

import { classNames } from 'utils/styles';
import { viewTransitionProps, vtKeys } from 'utils/view-transition';

import Link from 'components/shared/link';
import ViewTransitionTarget from 'components/shared/view-transition-target';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

type GradientVariant = keyof typeof gradients;

export interface CardLottieProps {
  title: string;
  href: string;
  animationData: object;
  gradient?: GradientVariant;
  className?: string;
}

//  ---------------------------------------------------------------------------
//  UTILS
//  ---------------------------------------------------------------------------

const gradients = {
  violet: {
    bg: 'from-violet-50 to-purple-100 dark:from-violet-950 dark:to-purple-900',
    border: 'border-violet-400 dark:border-violet-600',
    title: 'text-violet-800 dark:text-violet-300',
  },
  blue: {
    bg: 'from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-900',
    border: 'border-blue-400 dark:border-blue-600',
    title: 'text-blue-800 dark:text-blue-300',
  },
  teal: {
    bg: 'from-teal-50 to-emerald-100 dark:from-teal-950 dark:to-emerald-900',
    border: 'border-teal-400 dark:border-teal-600',
    title: 'text-teal-800 dark:text-teal-300',
  },
  rose: {
    bg: 'from-rose-50 to-pink-100 dark:from-rose-950 dark:to-pink-900',
    border: 'border-rose-400 dark:border-rose-600',
    title: 'text-rose-800 dark:text-rose-300',
  },
  amber: {
    bg: 'from-amber-50 to-orange-100 dark:from-amber-950 dark:to-orange-900',
    border: 'border-amber-400 dark:border-amber-600',
    title: 'text-amber-800 dark:text-amber-300',
  },
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function CardLottie({ title, href, animationData, gradient = 'violet', className }: CardLottieProps) {
  const colors = gradients[gradient];

  return (
    <Link href={href} className="group block min-w-[250px] no-underline hover:no-underline">
      <ViewTransitionTarget as="div" name={vtKeys.aboutCard(href)} className="rounded-lg">
        <div
          className={classNames(
            'relative h-40 overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br p-6 transition-all duration-300 dark:border-gray-700',
            colors.bg,
            colors.border,
            className
          )}
        >
          <span
            className={classNames('block text-2xl font-bold leading-tight tracking-tight', colors.title)}
            {...viewTransitionProps(vtKeys.aboutTitle(href))}
          >
            {title}
          </span>
          <div className="pointer-events-none absolute bottom-0 right-3 h-32 w-32 select-none opacity-75">
            <Lottie animationData={animationData} loop={true} />
          </div>
        </div>
      </ViewTransitionTarget>
    </Link>
  );
}

export default CardLottie;
