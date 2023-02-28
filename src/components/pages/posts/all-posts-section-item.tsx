import { FunctionComponent, PropsWithChildren } from 'react';

import { Routes } from 'config/constants';

import { BlogEntry } from 'services/posts-content-service';

import { formatDate } from 'utils/date';

import Link from 'components/shared/link';
import Tag from 'components/shared/tag';

/*~
 * TYPES
 */

export type AllPostsSectionItemProps = Pick<
  BlogEntry,
  'slug' | 'title' | 'date' | 'summary' | 'tags' | 'language'
>;

/*~
 * COMPONENT
 */

const AllPostsSectionItem: FunctionComponent<
  PropsWithChildren<AllPostsSectionItemProps>
> = (props) => {
  const { slug, date, title, summary, language } = props;

  return (
    <li key={slug} className="py-4">
      <article className="xl:items-baseline">
        <div className="sm:text-base text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
        <h2 className="grow text-2xl font-bold leading-8 tracking-tight">
          <Link
            href={`/${Routes.posts}/${slug}`}
            className="text-gray-900 dark:text-gray-100"
          >
            {language === 'pt' ? `🇧🇷 • ${title}` : `${title}`}
          </Link>
        </h2>
        {/* TODO: Move this back once we have tags. */}
        {/* <div className="flex flex-wrap gap-3 my-2">
          {tags.map((tag) => (
            <Tag key={tag} text={tag} />
          ))}
        </div> */}
        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
          {summary}
        </div>
      </article>
    </li>
  );
};

export default AllPostsSectionItem;
