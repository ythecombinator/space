import { FunctionComponent, PropsWithChildren } from 'react';

import { Routes } from 'config/constants';
import { siteMetadata } from 'config/constants';

import { BlogEntry } from 'services/posts-content-service';

import { formatDate } from 'utils/date';
import { discussOnTwitter } from 'utils/social';

import Link from 'components/shared/link';
import PageTitle from 'components/shared/page-title';
import ScrollTop from 'components/shared/scroll-top';
import SectionCover from 'components/shared/section-cover';

/*~
 * TYPES
 */

interface BlogEntryLayoutProps {
  content: BlogEntry;
}

/*~
 * LAYOUT
 */

const BlogEntryLayout: FunctionComponent<
  PropsWithChildren<BlogEntryLayoutProps>
> = ({ content, children }) => {
  const { date, title, slug, readingTime, cover } = content;
  return (
    <>
      <ScrollTop />
      <article>
        <div>
          <header className="space-y-2 pb-10">
            <div className="mt-4 space-y-2 text-left">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 ">
                <div className="text-gray-500 dark:text-gray-400">
                  {readingTime.text}
                </div>
              </div>
            </div>
          </header>
          <div className="pb-8 " style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className="space-y-4 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <SectionCover alt={title} src={cover} />
              <div className="prose max-w-none pb-4 dark:prose-dark">
                {children}
              </div>
              <div className="flex justify-between pt-6 text-sm text-gray-700 dark:text-gray-300">
                Thanks for reading 💖
                <Link
                  href={discussOnTwitter(title, `${Routes.posts}/${slug}`)}
                  rel="me"
                >
                  Share on Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogEntryLayout;
