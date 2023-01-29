import { Blog } from 'contentlayer/generated';
import { CoreContent } from 'lib/utils/contentlayer';
import { FunctionComponent } from 'react';
import { PostFrontMatter } from 'types/front-matter';

import { Routes } from 'config/constants';
import { siteMetadata } from 'config/constants';

import { formatDate } from 'utils/date';
import { discussOnTwitter } from 'utils/social';

import Link from 'components/shared/link';
import PageTitle from 'components/shared/page-title';
import ScrollTop from 'components/shared/scroll-top';
import BlogSEO from 'components/shared/seo-blog';

/*~
 * TYPES
 */

interface PostLayoutProps {
  content: CoreContent<Blog>;
}

/*~
 * LAYOUT
 */

const PostLayout: FunctionComponent<PostLayoutProps> = ({
  content,
  children,
}) => {
  const { date, title, slug, readingTime } = content;
  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${content.slug}`}
        {...content}
      />
      <ScrollTop />
      <article>
        <div>
          <header className="pb-10">
            <div className="mt-4 space-y-1 text-left">
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
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 ">
                <div className="text-gray-500 dark:text-gray-400">
                  {readingTime.text}
                </div>
              </div>
            </div>
          </header>
          <div className="pb-8 " style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className=" xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pb-4 prose dark:prose-dark max-w-none">
                {children}
              </div>
              <div className="pt-6 flex justify-between text-sm text-gray-700 dark:text-gray-300">
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

export default PostLayout;
