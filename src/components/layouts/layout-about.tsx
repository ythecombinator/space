import { FunctionComponent } from 'react';
import { AboutFrontMatter } from 'types/front-matter';

import PageSEO from 'components/shared/seo-page';

/*~
 * TYPES
 */

interface AboutLayoutProps {
  frontMatter: AboutFrontMatter;
}

/*~
 * LAYOUT
 */

const AboutLayout: FunctionComponent<AboutLayoutProps> = ({
  children,
  frontMatter,
}) => {
  const { name } = frontMatter;

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2  xl:gap-x-8 xl:space-y-0">
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutLayout;
