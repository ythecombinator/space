import { FunctionComponent, PropsWithChildren } from 'react';

import { Routes } from 'config/constants';

import { BlogEntry } from 'services/content/posts';

import { formatDate } from 'utils/date';
import { discussOnLinkedIn, discussOnReddit, discussOnTwitter } from 'utils/social';

import PageTitle from 'components/shared/page-title';
import ScrollTop from 'components/shared/scroll-top';
import SectionCover from 'components/shared/section-cover';
import SocialShare from 'components/shared/social-share';
import Typography from 'components/shared/typography';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface BlogEntryLayoutProps {
  content: BlogEntry;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

const BlogEntryLayout: FunctionComponent<PropsWithChildren<BlogEntryLayoutProps>> = ({ content, children }) => {
  const { date, title, slug, readingTime, hero } = content;
  return (
    <>
      <ScrollTop />
      <article>
        <header className="flex flex-col gap-4 space-y-2 pb-10">
          <dl className="flex gap-4">
            <dt className="sr-only">Published on</dt>
            <dd>
              <Typography.subtle className="text-gray-500 dark:text-gray-400">
                <time dateTime={date}>{formatDate(date)}</time>
              </Typography.subtle>
            </dd>

            <dt className="sr-only">Reading Time</dt>
            <dd>
              <Typography.subtle className="text-gray-500 dark:text-gray-400">{readingTime.text}</Typography.subtle>
            </dd>
          </dl>
          <PageTitle>{title}</PageTitle>
        </header>
        <div className="pb-8 " style={{ gridTemplateRows: 'auto 1fr' }}>
          <div className="space-y-4 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <SectionCover alt={title} src={hero} />
            <div className="prose max-w-none pb-4 dark:prose-invert">{children}</div>
            <div className="mx-auto mt-16 flex w-full max-w-3xl flex-col items-center justify-center text-center">
              <Typography.subtle className="flex items-center">Thanks for reading!</Typography.subtle>
              <Typography.subtle className="flex items-center">Share this post with your friends:</Typography.subtle>
              <div className="flex pt-2">
                <SocialShare platform="Twitter" href={discussOnTwitter(title, `${Routes.posts}/${slug}`)} />
                <SocialShare platform="LinkedIn" href={discussOnLinkedIn(`${Routes.posts}/${slug}`)} />
                <SocialShare platform="Reddit" href={discussOnReddit(title, `${Routes.posts}/${slug}`)} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogEntryLayout;
