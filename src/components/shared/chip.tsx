import { cva, type VariantProps } from 'class-variance-authority';
import { FunctionComponent, PropsWithChildren } from 'react';

//  ---------------------------------------------------------------------------
//  STYLES
//  ---------------------------------------------------------------------------

const chipVariants = cva('group relative mr-4 inline-block text-sm font-medium no-underline uppercase', {
  variants: {
    variant: {
      default: 'text-blue-700 dark:text-blue-300',
      primary: 'text-indigo-700 dark:text-indigo-300',
      secondary: 'text-purple-700 dark:text-purple-300',
      success: 'text-emerald-700 dark:text-emerald-300',
      warning: 'text-amber-700 dark:text-amber-300',
      danger: 'text-red-700 dark:text-red-300',
      info: 'text-cyan-700 dark:text-cyan-300',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const chipBackgroundVariants = cva(
  'absolute inset-0 translate-x-0.5 translate-y-0.5 transition-transform group-hover:translate-x-0 group-hover:translate-y-0',
  {
    variants: {
      variant: {
        default: 'bg-blue-700 dark:bg-blue-300',
        primary: 'bg-indigo-700 dark:bg-indigo-300',
        secondary: 'bg-purple-700 dark:bg-purple-300',
        success: 'bg-emerald-700 dark:bg-emerald-300',
        warning: 'bg-amber-700 dark:bg-amber-300',
        danger: 'bg-red-700 dark:bg-red-300',
        info: 'bg-cyan-700 dark:bg-cyan-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface ChipProps extends VariantProps<typeof chipVariants> {}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const Chip: FunctionComponent<PropsWithChildren<ChipProps>> = ({ children, variant }) => {
  return (
    <span className={chipVariants({ variant })}>
      <span className={chipBackgroundVariants({ variant })}></span>
      <em className="relative block border border-current bg-white px-2 py-1 dark:bg-gray-800">{children}</em>
    </span>
  );
};

export default Chip;
