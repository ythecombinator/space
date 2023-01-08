import Link from 'components/Link';
import { BlogSEO } from 'components/NextSEO';
import PageTitle from 'components/PageTitle';
import ScrollTopAndComment from 'components/ScrollTopAndComment';
import siteMetadata from 'data/siteMetadata';
import formatDate from 'lib/utils/formatDate';

export default function PostLayout({ frontMatter, children }) {
  const { date, title, slug, fileName, readingTime } = frontMatter;

  const editUrl = (fileName) =>
    `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`;
  const discussUrl = (slug) =>
    `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `${siteMetadata.siteUrl}/blog/${slug}`
    )}`;

  const pageViews = undefined;

  return (
    <>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`}
        {...frontMatter}
      />
      <ScrollTopAndComment />
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
                {pageViews && <div>Page Views</div>}
              </div>
            </div>
          </header>
          <div className="pb-8 " style={{ gridTemplateRows: 'auto 1fr' }}>
            <div className=" xl:pb-0 xl:col-span-3 xl:row-span-2">
              <div className="pb-4 prose dark:prose-dark max-w-none">
                {children}
              </div>
              <div className="pt-6 flex justify-between text-sm text-gray-700 dark:text-gray-300">
                <Link href={editUrl(fileName)}>{'Thanks for reading 💖'}</Link>
                <Link href={discussUrl(slug)} rel="nofollow">
                  {'Discuss on Twitter'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
