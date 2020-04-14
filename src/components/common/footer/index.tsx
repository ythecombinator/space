/** @jsx jsx */
import {jsx} from 'theme-ui';

import useSiteMetadata from 'hooks/use-site-metadata';

import * as styles from './styles';

const Footer = () => {
  const { siteTitleAlt } = useSiteMetadata();

  return (
    <footer sx={styles.footer}>
      <div>
        {siteTitleAlt} © {new Date().getFullYear()}.
      </div>
      <div>Made with 💖 while high either on ☕ or 🍻 — or both.</div>
    </footer>
  );
};

export default Footer;
