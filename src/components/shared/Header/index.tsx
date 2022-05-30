import { FC } from 'react';
import { Flex, useColorMode } from 'theme-ui';

import { navigationItems } from 'config/constants';

import Navigation from 'components/Navigation';
import ColorModeToggle from 'components/shared/ColorModeToggle';
import HeaderExternalLinks from 'components/shared/HeaderExternalLinks';
import HeaderTitle from 'components/shared/HeaderTitle';

import * as styles from './Header.styles';

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
    <header sx={styles.header}>
      <Flex sx={styles.flex}>
        <HeaderTitle />
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <div sx={styles.container}>
        <Navigation items={navigationItems} />
        <HeaderExternalLinks />
      </div>
    </header>
  );
};

export default Header;
