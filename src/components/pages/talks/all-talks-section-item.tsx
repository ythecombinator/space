import { FunctionComponent } from 'react';

import { Routes } from 'config/constants';

import Link from 'components/shared/link';

/*~
 * TYPES
 */

export type AllTalksSectionItemProps = {
  talkSlug: string;
  talkTitle: string;
  index: number;
};

/*~
 * COMPONENT
 */

const AllTalksSectionItem: FunctionComponent<AllTalksSectionItemProps> = (
  props
) => {
  const { talkTitle, talkSlug, index } = props;

  return (
    <Link
      href={`/${Routes.talks}/${talkSlug}`}
      className="w-full"
      aria-label={talkTitle}
    >
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
    </Link>
  );
};

export default AllTalksSectionItem;
