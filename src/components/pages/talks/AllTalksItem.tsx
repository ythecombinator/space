import { Document as ContentfulDocument } from '@contentful/rich-text-types';
import Link from 'components/Link';
import { FC } from 'react';

/*~
 * TYPES
 */

export type AllTalksItemProps = {
  slug: string;
  title: string;
  headline: ContentfulDocument;
  tags: {
    name: string;
    id: string;
  }[];
};

/*~
 * COMPONENT
 */

const AllTalksItem: FC<AllTalksItemProps> = (props) => {
  const { title, slug } = props;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full" aria-label={title}>
        <div className="w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center">
            <div className="flex items-center">
              <div className="text-gray-300 dark:text-gray-400 text-left mr-6">
                0
              </div>
              <h4 className="text-base sm:text-lg font-medium w-full text-gray-800 dark:text-gray-100">
                {title}
              </h4>
            </div>
            <div className="flex items-center mt-2 sm:mt-0  justify-between">
              <p className="text-gray-500 text-sm dark:text-gray-400 text-left sm:text-right md:mb-0 mr-2 ml-8 sm:ml-0">
                OPA
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default AllTalksItem;
