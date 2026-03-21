import { Content, Provider, Root, Trigger } from '@radix-ui/react-tooltip';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ComponentPropsWithoutRef, ElementRef, forwardRef, PropsWithChildren } from 'react';

import Typography from './typography';

//  ---------------------------------------------------------------------------
//  Tooltip.InnerContent
//  ---------------------------------------------------------------------------

// Inspired by:
// https://github.com/lekterable/website/blob/master/src/components/ui/circle-list.tsx

function TooltipInnerContent({ children }: PropsWithChildren<{ className?: string }>) {
  const x = useMotionValue(0);
  const config = { damping: 5, stiffness: 100 };
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), config);
  const translateX = useSpring(useTransform(x, [-100, 100], [-47, 47]), config);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { damping: 10, stiffness: 260, type: 'spring' },
          y: 0,
        }}
        exit={{ opacity: 0, scale: 0.6, y: 20 }}
        style={{
          left: '50%',
          rotate,
          transform: 'translateX(50%)',
          translateX: '-50%',
          whiteSpace: 'nowrap',
          x: translateX,
        }}
        className="absolute -top-10 z-50 flex flex-col items-center justify-center rounded-md border border-neutral-200 bg-white px-4 py-2 text-xs shadow-xl dark:border-neutral-700 dark:bg-neutral-900"
      >
        <Typography.small className="relative z-30 text-base font-bold text-neutral-900 dark:text-neutral-100">
          {children}
        </Typography.small>
      </motion.div>
    </AnimatePresence>
  );
}

//  ---------------------------------------------------------------------------
//  Tooltip.Content
//  ---------------------------------------------------------------------------

const TooltipContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
  ({ className, children, sideOffset = 4, ...props }, ref) => {
    return (
      <Content ref={ref} sideOffset={sideOffset} {...props}>
        <TooltipInnerContent className={className}>{children}</TooltipInnerContent>
      </Content>
    );
  }
);

TooltipContent.displayName = Content.displayName;

export default { Root, Provider, Trigger, Content: TooltipContent, InnerContent: TooltipInnerContent };
