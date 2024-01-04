import { useRouter } from 'next/router';

import { siteMetadata } from 'config/constants';

export function usePathName() {
  const { asPath } = useRouter();
  const formattedPath = asPath.split('#')[0].split('?')[0];
  return `${siteMetadata.siteUrl}${formattedPath}`;
}

export function getMetadataProps(url: string) {
  return {
    title: siteMetadata.title,
    description: siteMetadata.description,
    openGraph: {
      url,
      type: 'website',
      locale: siteMetadata.locale,
      siteName: siteMetadata.title,
      images: [{ url: siteMetadata.socialBanner }],
    },
    twitter: {
      site: url,
      handle: siteMetadata.twitterHandle,
      cardType: 'summary_large_image',
    },
  };
}
