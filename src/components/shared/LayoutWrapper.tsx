import MobileNav from 'components/MobileNav';
import SectionContainer from 'components/SectionContainer';
import { FunctionComponent } from 'react';

import { headerNavigationLinks } from 'config/constants';

import Footer from 'components/shared/Footer';
import LayoutGradient from 'components/shared/LayoutGradient';
import ThemeSwitch from 'components/shared/ThemeSwitch';
import NavigationMenu from 'components/shared/navigation-menu';

export const LayoutWrapper: FunctionComponent<{}> = ({ children }) => {
  return (
    <>
      <LayoutGradient />
      <SectionContainer>
        <div className="flex flex-col justify-between h-screen">
          <header className="flex items-center py-10">
            <div className="flex flex-auto items-center justify-between">
              <div className="flex flex-1 items-center justify-between text-base leading-5">
                <div className="hidden sm:block">
                  <NavigationMenu items={headerNavigationLinks} />
                </div>

                <ThemeSwitch />
              </div>

              <MobileNav />
            </div>
          </header>
          <main className="mb-auto">{children}</main>

          <Footer />
        </div>
      </SectionContainer>
      {/* <FooterGradient /> */}
    </>
  );
};

export default LayoutWrapper;
