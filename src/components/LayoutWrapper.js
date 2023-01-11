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
            {/* <header className="sticky flex items-center py-10 bg-transparent top-0 z-30 bg-opacity-30 backdrop-blur-lg firefox:bg-opacity-100 dark:bg-opacity-30 dark:firefox:bg-opacity-100"> */}
            {/* <header className="fixed w-full bg-transparent border-b border-gray-200 dark:border-gray-800 dark:bg-violet-1000 top-0 z-30 flex items-center justify-between bg-white bg-opacity-30 backdrop-blur-lg firefox:bg-opacity-100 dark:bg-opacity-30 dark:firefox:bg-opacity-100"> */}
            <div className="flex flex-auto items-center justify-between">
              <div className="flex flex-1 items-center justify-between text-base leading-5">
                <div className="hidden sm:block">
                  {headerNavLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="link-underline dark:link-underline-black rounded-xl p-1 font-medium text-gray-900 hover:bg-gray-400/10 dark:text-gray-100 sm:p-4"
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
