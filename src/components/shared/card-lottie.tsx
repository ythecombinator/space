import Lottie from 'lottie-react';

import { classNames } from 'utils/styles';

import Link from 'components/shared/link';
import Typography from 'components/shared/typography';

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
    text: 'from-violet-800 to-purple-800 dark:from-violet-300 dark:to-purple-300',
  },
  blue: {
    bg: 'from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-900',
    border: 'border-blue-400 dark:border-blue-600',
    text: 'from-blue-800 to-cyan-800 dark:from-blue-300 dark:to-cyan-300',
  },
  teal: {
    bg: 'from-teal-50 to-emerald-100 dark:from-teal-950 dark:to-emerald-900',
    border: 'border-teal-400 dark:border-teal-600',
    text: 'from-teal-800 to-emerald-800 dark:from-teal-300 dark:to-emerald-300',
  },
  rose: {
    bg: 'from-rose-50 to-pink-100 dark:from-rose-950 dark:to-pink-900',
    border: 'border-rose-400 dark:border-rose-600',
    text: 'from-rose-800 to-pink-800 dark:from-rose-300 dark:to-pink-300',
  },
  amber: {
    bg: 'from-amber-50 to-orange-100 dark:from-amber-950 dark:to-orange-900',
    border: 'border-amber-400 dark:border-amber-600',
    text: 'from-amber-800 to-orange-800 dark:from-amber-300 dark:to-orange-300',
  },
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function CardLottie({ title, href, animationData, gradient = 'violet', className }: CardLottieProps) {
  const colors = gradients[gradient];

  return (
    <Link href={href} className="group no-underline hover:no-underline">
      <div
        className={classNames(
          'relative h-40 min-w-[250px] overflow-hidden rounded-lg border border-gray-200 bg-gradient-to-br p-6 transition-all duration-300 dark:border-gray-700',
          colors.bg,
          colors.border,
          className
        )}
      >
        <Typography.h3
          className={classNames(
            'text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent transition-all',
            colors.text
          )}
        >
          {title}
        </Typography.h3>
        <div className="absolute bottom-0 right-3 inline-block h-32 w-32 select-none mix-blend-luminosity opacity-75 transition-all duration-300">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </Link>
  );
}

export default CardLottie;
