import { PropsWithChildren } from 'react';

import { Routes } from 'config/constants';

import { BlogEntry } from 'services/content/posts';

import { formatDate } from 'utils/date';
import { viewTransitionStyle, vtKeys } from 'utils/view-transition';

import Link from 'components/shared/link';
import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

export type AllPostsSectionItemProps = Pick<BlogEntry, 'slug' | 'title' | 'date' | 'summary' | 'tags' | 'language'>;

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

function AllPostsSectionItem(props: PropsWithChildren<AllPostsSectionItemProps>) {
  const { slug, date, title, summary, language } = props;

  return (
    <li key={slug} className="py-4" style={viewTransitionStyle(vtKeys.postRow(slug))}>
      <article className="xl:items-baseline">
        <div
          className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400 sm:text-base"
          style={viewTransitionStyle(vtKeys.postDate(slug))}
        >
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
        <Typography.h2 className="my-2 grow text-2xl font-bold leading-8 tracking-tight">
          <Link href={`/${Routes.posts}/${slug}`} className="text-gray-900 dark:text-gray-100">
            <span style={viewTransitionStyle(vtKeys.postTitle(slug), { contain: false })}>
              {language === 'pt' ? `🇧🇷 — ${title}` : `${title}`}
            </span>
          </Link>
        </Typography.h2>
        <div className="prose max-w-none text-gray-500 dark:prose-invert dark:text-gray-400">{summary}</div>
      </article>
    </li>
  );
}

export default AllPostsSectionItem;
