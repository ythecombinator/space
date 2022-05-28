import Link from 'next/link';

import { replaceSlashes } from 'src/utils/string';
import { basePath, siteTitle } from 'src/utils/config';
import Logo from 'src/components/Logo';

const HeaderTitle = () => {
  return (
    <Link
      href={replaceSlashes(`/${basePath}`)}
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
