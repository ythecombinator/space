import { useTheme } from 'next-themes';
import { FC } from 'react';
import ContentLoader from 'react-content-loader';
import colors from 'tailwindcss/colors';

/*~
 * COMPONENT
 */

const AllPostsSectionItemSkeleton: FC<{}> = () => {
  const { theme } = useTheme();

  return (
    <li className="w-full py-4">
      <ContentLoader
        speed={2}
        viewBox="0 0 350 100"
        backgroundColor={theme === 'dark' ? colors.gray[800] : colors.gray[300]}
        foregroundColor={theme === 'dark' ? colors.gray[600] : colors.gray[100]}
      >
        <rect x="0" y="0" rx="3" ry="3" width="50" height="10" />
        <rect x="0" y="20" rx="3" ry="3" width="340" height="20" />
        <rect x="0" y="60" rx="3" ry="3" width="340" height="10" />
        <rect x="0" y="75" rx="3" ry="3" width="150" height="10" />
      </ContentLoader>
    </li>
  );
};

export default AllPostsSectionItemSkeleton;
