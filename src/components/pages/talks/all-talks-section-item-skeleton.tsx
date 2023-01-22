import { useTheme } from 'next-themes';
import { FC } from 'react';
import ContentLoader from 'react-content-loader';
import colors from 'tailwindcss/colors';

/*~
 * COMPONENT
 */

const AllTalksSectionItemSkeleton: FC<{}> = () => {
  const { theme } = useTheme();

  return (
    <div className="w-full border-b border-gray-200 dark:border-gray-700 py-3">
      <ContentLoader
        speed={1}
        viewBox="0 0 400 25"
        backgroundColor={theme === 'dark' ? colors.gray[800] : colors.gray[300]}
        foregroundColor={theme === 'dark' ? colors.gray[600] : colors.gray[100]}
      >
        <rect x="8" y="6" rx="4" ry="4" width="15" height="15" />
        <rect x="50" y="6" rx="4" ry="4" width="350" height="15" />
      </ContentLoader>
    </div>
  );
};

export default AllTalksSectionItemSkeleton;
