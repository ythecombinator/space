import siteMetadata from 'data/siteMetadata';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';

import CommonSEO from 'components/shared/seo-common';
import { PageSEOProps } from 'components/shared/seo-page';

/*~
 * COMPONENT
 */

const TagSEO: FC<PageSEOProps> = ({ title, description }) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const router = useRouter();

  return (
    <>
      <CommonSEO
        title={title}
        description={description}
        ogType="website"
        ogImage={ogImageUrl}
        twImage={twImageUrl}
      />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${description} - RSS feed`}
          href={`${siteMetadata.siteUrl}${router.asPath}/feed.xml`}
        />
      </Head>
    </>
  );
};

export default TagSEO;
