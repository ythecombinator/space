import siteMetadata from 'data/siteMetadata';
import { FC } from 'react';

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

const PageSEO: FC<PageSEOProps> = ({ title, description }) => {
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
