/** @jsx jsx */
import {Flex} from '@theme-ui/components';
import {Link} from 'gatsby';
import {jsx, Styled, useColorMode} from 'theme-ui';

import ColorModeToggle from 'components/common/colormode-toggle';
import Logo from 'components/common/logo';
import Navigation from 'components/common/navigation';
import SocialIcon from 'components/common/social-icon';

import useConfig from 'hooks/use-config';
import useSiteMetadata from 'hooks/use-site-metadata';

import {replaceSlashes} from 'utils/string';

import * as styles from './styles';

const Header = () => {
  const { siteTitle } = useSiteMetadata();
  const { navigation: nav, externalLinks, basePath } = useConfig();
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: any) => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };

  return (
    <header sx={styles.header}>
      <Flex sx={styles.flex}>
        <Link
          to={replaceSlashes(`/${basePath}`)}
          aria-label={`${siteTitle} - Back to home`}
          sx={styles.link}
        >
          <Logo />
        </Link>
        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
      </Flex>
      <div sx={styles.navigationContainer}>
        <Navigation nav={nav} />
        <div sx={styles.linkContainer}>
          {externalLinks.map((link) => (
            <Styled.a key={link.url} href={link.url}>
              <SocialIcon identifier={link.name} />
            </Styled.a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
