import { navigation } from 'src/utils/config';
import { useColorMode, Flex } from 'theme-ui';
import ColorModeToggle from './ColorModeToggle';
import HeaderExternalLinks from './HeaderExternalLinks';
import HeaderTitle from './HeaderTitle';
import Navigation from './Navigation';

const Header = () => {
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
        sx={{
          boxSizing: `border-box`,
          display: `flex`,
          variant: `dividers.bottom`,
          alignItems: `center`,
          justifyContent: `space-between`,
          mt: 3,
          color: `secondary`,
          a: { color: `secondary`, ':hover': { color: `heading` } },
          flexFlow: `wrap`,
        }}
      >
        <Navigation nav={navigation} />
        <HeaderExternalLinks />
      </div>
    </header>
  );
};

export default Header;
