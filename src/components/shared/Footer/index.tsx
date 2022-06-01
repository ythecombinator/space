import { FC } from 'react';

import { siteOwner } from 'config/constants';

import * as styles from './Footer.styles';

/*~
 * COMPONENT
 */

const Footer: FC = () => {
  return (
    <footer sx={styles.footer}>
      &copy; {new Date().getFullYear()} by {siteOwner}. All rights reserved.
    </footer>
  );
};

export default Footer;
