import { FC } from 'react';

import { siteTitle } from 'config/constants';

import * as styles from './Footer.styles';

/*~
 * COMPONENT
 */

const Footer: FC = () => {
  return (
    <footer sx={styles.footer}>
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
      </div>
      <div>Made with 💖 while high either on ☕ or 🍻 — or both.</div>
    </footer>
  );
};

export default Footer;
