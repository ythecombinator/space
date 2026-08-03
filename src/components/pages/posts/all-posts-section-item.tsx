import { PropsWithChildren } from 'react';

import { Routes } from 'config/constants';

import { BlogEntry } from 'services/content/posts';

import { formatDate } from 'utils/date';
import { viewTransitionProps, vtKeys } from 'utils/view-transition';

import Link from 'components/shared/link';
import Typography from 'components/shared/typography';
import ViewTransitionTarget from 'components/shared/view-transition-target';

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
    <li key={slug} className="py-4">
      <Link href={`/${Routes.posts}/${slug}`} className="block text-gray-900 no-underline dark:text-gray-100">
        <article {...viewTransitionProps(vtKeys.postRow(slug))}>
          <div
            className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400 sm:text-base"
            {...viewTransitionProps(vtKeys.postDate(slug))}
          >
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          <Typography.h2 className="my-2 grow text-2xl font-bold leading-8 tracking-tight">
            <ViewTransitionTarget name={vtKeys.postTitle(slug)}>
              {language === 'pt' ? `🇧🇷 — ${title}` : `${title}`}
            </ViewTransitionTarget>
          </Typography.h2>
          <div className="prose max-w-none text-gray-500 dark:prose-invert dark:text-gray-400">{summary}</div>
        </article>
      </Link>
    </li>
  );
}

export default AllPostsSectionItem;
