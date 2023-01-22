import { FunctionComponent } from 'react';

import { headerNavigationLinks } from 'config/constants';

import Footer from 'components/shared/footer';
import LayoutContainer from 'components/shared/layout-container';
import LayoutGradient from 'components/shared/layout-gradient';
import NavigationMenu from 'components/shared/navigation-menu';
import NavigationMenuMobile from 'components/shared/navigation-menu-mobile';
import ThemeSwitch from 'components/shared/theme-switch';

/*~
 * COMPONENT
 */

const LayoutWrapper: FunctionComponent = ({ children }) => {
  return (
    <>
      <LayoutGradient />
      <LayoutContainer>
        <div className="flex flex-col justify-between h-screen">
          <header className="flex items-center py-10">
            <div className="flex flex-auto items-center justify-between">
              <div className="flex flex-1 items-center justify-between text-base leading-5">
                <div className="hidden sm:block">
                  <NavigationMenu items={headerNavigationLinks} />
                </div>
                <ThemeSwitch />
              </div>
              <NavigationMenuMobile items={headerNavigationLinks} />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </LayoutContainer>
    </>
  );
};

export default LayoutWrapper;
