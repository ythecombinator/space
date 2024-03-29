import { FunctionComponent, PropsWithChildren } from 'react';

import { Routes } from 'config/constants';
import { siteMetadata } from 'config/constants';

import LayoutGradient from 'components/shared/layout-gradient';
import Link from 'components/shared/link';
import Signature from 'components/shared/signature';
import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

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
            <Link href="/feed.xml">RSS</Link>
          </div>
          <div className="mb-1 flex  flex-row justify-center  space-x-8 sm:mb-0 sm:flex-col sm:justify-start sm:space-x-0 sm:space-y-4">
            <Link href={siteMetadata.twitter}>Twitter</Link>
            <Link href={siteMetadata.github}>GitHub</Link>
            <Link href={siteMetadata.linkedin}>LinkedIn</Link>
          </div>
        </div>
        <Typography.subtle className="mb-5 flex items-center justify-center gap-2 sm:justify-start">
          <Signature /> © <time>{new Date().getFullYear()}</time>
        </Typography.subtle>
      </div>
    </footer>
  );
};

export default Footer;
