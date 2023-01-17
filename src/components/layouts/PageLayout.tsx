import { FC } from 'react';

/*~
 * TYPES
 */

interface PageLayoutProps {
  heading: string;
  subHeading?: JSX.Element;
}

/*~
 * LAYOUT
 */

const PageLayout: FC<PageLayoutProps> = ({ heading, subHeading, children }) => {
  return (
    <div className="mt-6 px-2 sm:px-0">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {heading}
        </h1>
        {subHeading}
      </div>
      {children}
    </div>
  );
};

export default PageLayout;
