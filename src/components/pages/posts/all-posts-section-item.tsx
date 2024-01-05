import { FunctionComponent, PropsWithChildren } from 'react';

import { Routes } from 'config/constants';

import { BlogEntry } from 'services/content/posts';

import { formatDate } from 'utils/date';

import Link from 'components/shared/link';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type AllPostsSectionItemProps = Pick<BlogEntry, 'slug' | 'title' | 'date' | 'summary' | 'tags' | 'language'>;

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const AllPostsSectionItem: FunctionComponent<PropsWithChildren<AllPostsSectionItemProps>> = (props) => {
  const { slug, date, title, summary, language } = props;

  return (
    <li key={slug} className="py-4">
      <article className="xl:items-baseline">
        <div className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400 sm:text-base">
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
        <h2 className="grow text-2xl font-bold leading-8 tracking-tight">
          <Link href={`/${Routes.posts}/${slug}`} className="text-gray-900 dark:text-gray-100">
            {language === 'pt' ? `🇧🇷 — ${title}` : `${title}`}
          </Link>
        </h2>
        <div className="prose max-w-none text-gray-500 dark:prose-invert dark:text-gray-400">{summary}</div>
      </article>
    </li>
  );
};

export default AllPostsSectionItem;
