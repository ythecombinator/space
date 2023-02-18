import Head from 'next/head';
import { useRouter } from 'next/router';
import { FunctionComponent, PropsWithChildren } from 'react';

import { siteMetadata } from 'config/constants';

import CommonSEO from 'components/shared/seo-common';
import { PageSEOProps } from 'components/shared/seo-page';

/*~
 * COMPONENT
 */

const TagSEO: FunctionComponent<PropsWithChildren<PageSEOProps>> = ({
  title,
  description,
}) => {
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
