import { FunctionComponent, PropsWithChildren } from 'react';

import { headerNavigationLinks, Routes } from 'config/constants';

import fonts from 'utils/fonts';
import { classNames } from 'utils/styles';

import Footer from 'components/shared/footer';
import LayoutGradient from 'components/shared/layout-gradient';
import NavigationMenu from 'components/shared/navigation-menu';
import NavigationMenuMobile from 'components/shared/navigation-menu-mobile';
import ThemeSwitch from 'components/shared/theme-switch';

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const LayoutWrapper: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <LayoutGradient />
      <div
        className={classNames(
          'm-auto max-w-2xl px-4 sm:px-6 xl:max-w-2xl xl:px-0',
          fonts.generalSans.className,
          fonts.generalSans.variable,
          fonts.recoleta.variable
        )}
      >
        <div className="flex h-screen flex-col justify-between">
          <header className="flex items-center py-10">
            <div className="flex flex-auto items-center justify-between">
              <div className="flex flex-1 items-center justify-between text-base leading-5">
                <div className="hidden sm:block">
                  <NavigationMenu items={headerNavigationLinks.filter((item) => item.href !== Routes.base)} />
                </div>
                <ThemeSwitch />
              </div>
              <NavigationMenuMobile items={headerNavigationLinks} />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LayoutWrapper;
