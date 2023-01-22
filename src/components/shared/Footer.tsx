import { github, twitter } from 'data/siteMetadata';
import { FunctionComponent } from 'react';

import { Routes } from 'config/constants';

import FooterExternalLink from 'components/shared/footer-external-link';
import LayoutGradient from 'components/shared/layout-gradient';
import Link from 'components/shared/link';

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
            <Link href="/about">
              <a className="text-gray-500 hover:text-gray-600 transition">
                About
              </a>
            </Link>
            <Link href={`/${Routes.posts}`}>
              <a className="text-gray-500 hover:text-gray-600 transition">
                Posts
              </a>
            </Link>
            <Link href="/tags">
              <a className="text-gray-500 hover:text-gray-600 transition">
                Tags
              </a>
            </Link>
          </div>
          <div className="flex flex-row  mb-1 sm:mb-0  sm:flex-col space-x-8 sm:space-x-0 justify-center sm:justify-start sm:space-y-4">
            <FooterExternalLink href={twitter}>Twitter</FooterExternalLink>
            <FooterExternalLink href={github}>GitHub</FooterExternalLink>
            <Link href="/feed.xml">
              <a className="text-gray-500 hover:text-gray-600 transition">
                RSS
              </a>
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:items-center sm:justify-center  mb-5 ">
          <p className="text-gray-500 text-base self-start dark:text-gray-400 text-left sm:text-right mb-2">
            © <time>{new Date().getFullYear()}</time> Made with 💖.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
