import { FC } from 'react';
import { navigationItems } from 'src/config/constants';
import { useColorMode, Flex } from 'theme-ui';
import ColorModeToggle from './ColorModeToggle';
import HeaderExternalLinks from './HeaderExternalLinks';
import HeaderTitle from './HeaderTitle';
import Navigation from './Navigation';

/*~
 * COMPONENT
 */

const Header: FC = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  const toggleColorMode = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <header sx={{ mb: [5, 6] }}>
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between` }}>
        <HeaderTitle />
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <div
        sx={(theme) => ({
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { ...theme.styles?.a },
          flexFlow: `wrap`,
        })}
      >
        <Navigation items={navigationItems} />
        <HeaderExternalLinks />
      </div>
    </header>
  );
};

export default Header;
