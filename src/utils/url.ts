import { useRouter } from 'next/router';

import { siteMetadata } from 'config/constants';

export function usePathName() {
  const { asPath } = useRouter();
  const formattedPath = asPath.split('#')[0].split('?')[0];
  return `${siteMetadata.siteUrl}${formattedPath}`;
}
