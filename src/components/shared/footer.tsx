import { FunctionComponent } from 'react';

import { Routes } from 'config/constants';
import { siteMetadata } from 'config/constants';

import LayoutGradient from 'components/shared/layout-gradient';
import Link from 'components/shared/link';
import Typography from 'components/shared/typography';

/*~
 * COMPONENT
 */

const Footer: FunctionComponent = () => {
  return (
    <footer className="flex flex-col justify-center items-start mx-auto w-full mb-8 mt-4">
      <LayoutGradient />
      <hr className="w-full border-1 border-gray-100 dark:border-gray-800 mb-8" />
      <div className="w-full pb-16 flex flex-col-reverse justify-between sm:flex-row">
        <div className="flex flex-col sm:flex-row sm:space-x-16">
          <div className="flex flex-row mb-1 sm:mb-0 sm:flex-col space-x-8 sm:space-x-0 justify-center sm:justify-start sm:space-y-4">
            <Link href={`/${Routes.life}`}>Life</Link>
            <Link href={`/${Routes.work}`}>Work</Link>
            <Link href={`/${Routes.uses}`}>Uses</Link>
          </div>
          <div className="flex flex-row  mb-1 sm:mb-0  sm:flex-col space-x-8 sm:space-x-0 justify-center sm:justify-start sm:space-y-4">
            <Link href={siteMetadata.twitter}>Twitter</Link>
            <Link href={siteMetadata.github}>GitHub</Link>
            <Link href="/feed.xml">RSS</Link>
          </div>
        </div>
        <div className="flex flex-col sm:items-center sm:justify-center  mb-5 ">
          <Typography.subtle>
            © <time>{new Date().getFullYear()}</time> Made with 💖, ☕ and 🍻.
          </Typography.subtle>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
