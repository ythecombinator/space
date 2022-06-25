export type ExternalLink = {
  label: string;
  href: string;
};

export type InternalLink = {
  label: string;
  path: string;
};

export type Link = ExternalLink | InternalLink;
