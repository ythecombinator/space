import Link from 'components/Link';
import { FC } from 'react';
import { PostFrontMatter } from 'types/PostFrontMatter';

import { NavigationPath } from 'config/constants';

import { formatDate } from 'utils/date';

/*~
 * TYPES
 */

export type AllPostsItemProps = Pick<
  PostFrontMatter,
  'slug' | 'title' | 'date' | 'summary'
>;

/*~
 * COMPONENT
 */

const AllPostsItem: FC<AllPostsItemProps> = (props) => {
  const { slug, date, title, summary } = props;

  return (
    <li key={slug} className="py-4">
      <article className="xl:items-baseline">
        <div className="sm:text-base text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
        <h3 className="grow text-2xl font-bold leading-8 tracking-tight">
          <Link
            href={`/${NavigationPath.posts}/${slug}`}
            className="text-gray-900 dark:text-gray-100"
          >
            {title}
          </Link>
        </h3>
        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
          {summary}
        </div>
      </article>
    </li>
  );
};

export default AllPostsItem;
