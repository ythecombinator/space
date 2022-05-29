import Link from 'next/link';
import { FC } from 'react';

import { NavigationPath, siteTitle } from 'config/constants';

import { replaceSlashes } from 'utils/string';

import Logo from 'components/Logo';

/*~
 * COMPONENT
 */

const HeaderTitle: FC = () => {
  return (
    <Link
      href={replaceSlashes(`/${NavigationPath.base}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none` }}
    >
      <div sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>
        <Logo />
      </div>
    </Link>
  );
};

export default HeaderTitle;
