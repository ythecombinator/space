import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FC } from 'react';

import { NavigationPath, siteTitle } from 'config/constants';

import { replaceSlashes } from 'utils/string';

import * as styles from './HeaderTitle.styles';

const Logo = dynamic(() => import('components/shared/Logo'), { ssr: false });

/*~
 * COMPONENT
 */

const HeaderTitle: FC = () => {
  return (
    <Link
      href={replaceSlashes(`/${NavigationPath.base}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={styles.link}
    >
      <div sx={styles.logoContainer}>
        <Logo />
      </div>
    </Link>
  );
};

export default HeaderTitle;
