import { useTheme } from 'next-themes';
import { useMemo } from 'react';
import ContentLoader from 'react-content-loader';
import colors from 'tailwindcss/colors';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

type UpcomingTalksSectionSkeletonProps = {
  items: number;
};

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function UpcomingTalksSectionItemSkeleton() {
  const { theme } = useTheme();

  return (
    <div
      aria-hidden
      className="w-full rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
    >
      <ContentLoader
        speed={1}
        viewBox="0 0 400 88"
        backgroundColor={theme === 'dark' ? colors.gray[800] : colors.gray[300]}
        foregroundColor={theme === 'dark' ? colors.gray[600] : colors.gray[100]}
      >
        <rect x="0" y="0" rx="4" ry="4" width="180" height="14" />
        <rect x="0" y="28" rx="4" ry="4" width="320" height="22" />
        <rect x="0" y="62" rx="4" ry="4" width="220" height="14" />
      </ContentLoader>
    </div>
  );
}

function UpcomingTalksSectionSkeleton({ items }: UpcomingTalksSectionSkeletonProps) {
  const itemSkeletons = useMemo(() => Array.from({ length: items }, (_, index) => index), [items]);

  return (
    <>
      {itemSkeletons.map((skeletonId) => (
        <UpcomingTalksSectionItemSkeleton key={skeletonId} />
      ))}
    </>
  );
}

export default UpcomingTalksSectionSkeleton;
