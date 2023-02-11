import { FunctionComponent } from 'react';
import { AboutFrontMatter } from 'types/front-matter';

import PageTitle from 'components/shared/page-title';
import PageSEO from 'components/shared/seo-page';

/*~
 * TYPES
 */

interface AboutLayoutProps {
  content: AboutFrontMatter;
}

/*~
 * LAYOUT
 */

const AboutLayout: FunctionComponent<AboutLayoutProps> = ({ children }) => {
  const name = 'Matheus';

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="mt-6 px-2 sm:px-0">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <PageTitle>About</PageTitle>
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
