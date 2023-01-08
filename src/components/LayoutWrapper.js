import Link from 'components/Link';
import MobileNav from 'components/MobileNav';
import SectionContainer from 'components/SectionContainer';
import headerNavLinks from 'data/headerNavLinks';

import Footer from 'components/shared/Footer';
import LayoutGradient from 'components/shared/LayoutGradient';
import ThemeSwitch from 'components/shared/ThemeSwitch';

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <LayoutGradient />
      <SectionContainer>
        <div className="flex flex-col justify-between h-screen">
          <header className="flex items-center py-10">
            <div className="flex flex-auto items-center justify-between">
              <div className="flex flex-1 items-center justify-between text-base leading-5">
                <div className="hidden sm:block">
                  {headerNavLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="p-2 mr-4 font-medium text-gray-900 sm:p-2 dark:text-gray-100 cursor-pointer  hover:underline hover:rounded "
                    >
                      {link.title}
                    </Link>
                  ))}
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
