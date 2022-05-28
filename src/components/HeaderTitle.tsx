import Link from 'next/link';

import { replaceSlashes } from 'src/utils/string';
import { NavigationPath, siteTitle } from 'src/config/constants';
import Logo from 'src/components/Logo';
import { FC } from 'react';

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
