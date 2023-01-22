import { FunctionComponent } from 'react';
import { PostFrontMatter } from 'types/front-matter';

import { Routes } from 'config/constants';

import { formatDate } from 'utils/date';

import Link from 'components/shared/link';
import Tag from 'components/shared/tag';

/*~
 * TYPES
 */

export type AllPostsSectionItemProps = Pick<
  PostFrontMatter,
  'slug' | 'title' | 'date' | 'summary' | 'tags'
>;

/*~
 * COMPONENT
 */

const AllPostsSectionItem: FunctionComponent<AllPostsSectionItemProps> = (
  props
) => {
  const { slug, date, title, summary, tags } = props;

  return (
    <li key={slug} className="py-4">
      <article className="xl:items-baseline">
        <div className="sm:text-base text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
        <h3 className="grow text-2xl font-bold leading-8 tracking-tight">
          <Link
            href={`/${Routes.posts}/${slug}`}
            className="text-gray-900 dark:text-gray-100"
          >
            {title}
          </Link>
        </h3>
        <div className="flex flex-wrap gap-3 my-2">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div>
        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
          {summary}
        </div>
      </article>
    </li>
  );
};

export default AllPostsSectionItem;
