import { Document as ContentfulDocument } from '@contentful/rich-text-types';
import Link from 'components/Link';
import { FC } from 'react';

/*~
 * TYPES
 */

export type AllTalksItemProps = {
  talkSlug: string;
  talkTitle: string;
  index: number;
};

/*~
 * COMPONENT
 */

const AllTalksItem: FC<AllTalksItemProps> = (props) => {
  const { talkTitle, talkSlug, index } = props;

  return (
    <Link href={`/blog/${talkSlug}`}>
      <a className="w-full" aria-label={talkTitle}>
        <div className="w-full border-b border-gray-200 dark:border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center">
            <div className="flex items-center">
              <div className="text-gray-300 dark:text-gray-400 text-left mr-6">
                {index}
              </div>
              <h4 className="text-base sm:text-lg font-medium w-full text-gray-800 dark:text-gray-100">
                {talkTitle}
              </h4>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default AllTalksItem;
