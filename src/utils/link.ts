export const isInternalLink = (href: string) => href.startsWith('/');

export const isAnchorLink = (href: string) => href.startsWith('#');

/** Internal links the router can navigate to — protocol-relative URLs and in-page anchors are not */
export const isRoutableLink = (href: string) =>
  isInternalLink(href) && !href.startsWith('//') && !href.startsWith('/#');
