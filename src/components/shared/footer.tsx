import { FunctionComponent, PropsWithChildren } from 'react';

import { Routes } from 'config/constants';
import { siteMetadata } from 'config/constants';

import LayoutGradient from 'components/shared/layout-gradient';
import Link from 'components/shared/link';
import Typography from 'components/shared/typography';

/*~
 * COMPONENT
 */

const Footer: FunctionComponent<PropsWithChildren<{}>> = () => {
  return (
    <footer className="mx-auto mb-8 mt-4 flex w-full flex-col items-start justify-center">
      <LayoutGradient />
      <hr className="mb-8 w-full border-gray-100 dark:border-gray-800" />
      <div className="flex w-full flex-col-reverse justify-between pb-16 sm:flex-row">
        <div className="flex flex-col sm:flex-row sm:space-x-16">
          <div className="mb-1 flex flex-row justify-center space-x-8 sm:mb-0 sm:flex-col sm:justify-start sm:space-x-0 sm:space-y-4">
            <Link href={`/${Routes.life}`}>Life</Link>
            <Link href={`/${Routes.experience}`}>Experience</Link>
          </div>
          <div className="mb-1 flex  flex-row justify-center  space-x-8 sm:mb-0 sm:flex-col sm:justify-start sm:space-x-0 sm:space-y-4">
            <Link href={siteMetadata.twitter}>Twitter</Link>
            <Link href={siteMetadata.github}>GitHub</Link>
          </div>
        </div>
        <div className="mb-5 flex flex-col sm:items-center  sm:justify-center ">
          <Typography.subtle>
            {siteMetadata.author} © <time>{new Date().getFullYear()}</time>
          </Typography.subtle>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
