import { useTheme } from 'next-themes';
import ContentLoader from 'react-content-loader';
import colors from 'tailwindcss/colors';

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function PhotoHighlightsSectionItemSkeleton() {
  const { theme } = useTheme();

  return (
    <div aria-hidden className="relative h-[280px] w-full overflow-hidden rounded-2xl">
      <ContentLoader
        speed={1}
        width="100%"
        height="100%"
        viewBox="0 0 400 280"
        preserveAspectRatio="none"
        backgroundColor={theme === 'dark' ? colors.gray[800] : colors.gray[300]}
        foregroundColor={theme === 'dark' ? colors.gray[600] : colors.gray[100]}
      >
        <rect x="24" y="196" rx="4" ry="4" width="280" height="14" />
        <rect x="24" y="220" rx="4" ry="4" width="200" height="22" />
        <rect x="24" y="252" rx="4" ry="4" width="120" height="12" />
      </ContentLoader>
    </div>
  );
}

export default PhotoHighlightsSectionItemSkeleton;
