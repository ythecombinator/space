import { FunctionComponent, PropsWithChildren } from 'react';

import { siteMetadata } from 'config/constants';

import CommonSEO from 'components/shared/seo-common';

/*~
 * TYPES
 */

export interface PageSEOProps {
  title: string;
  description: string;
}

/*~
 * COMPONENT
 */

const PageSEO: FunctionComponent<PropsWithChildren<PageSEOProps>> = ({
  title,
  description,
}) => {
  const ogImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  const twImageUrl = siteMetadata.siteUrl + siteMetadata.socialBanner;
  return (
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImageUrl}
      twImage={twImageUrl}
    />
  );
};

export default PageSEO;
