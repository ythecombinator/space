export interface PageProps {
  path: string;
  location: Location;
  pageResources: PageResources;
  uri: string;
  data: Data;
  pageContext: Context;
  pathContext: Context;
}

export interface Location {
  pathname: string;
  search: string;
  hash: string;
  href: string;
  origin: string;
  protocol: string;
  host: string;
  hostname: string;
  port: string;
  state: State;
  key: string;
}

export interface State {
  key: string;
}

export interface PageResources {
  json: Json;
  page: Page;
}

export interface Json {
  data: Data;
  pageContext: Context;
}

export interface Data {
  allPost: AllQuery;
  allTalk: AllQuery;
}

export interface AllQuery {
  nodes: NodesEntity[];
  group: GroupEntity[];
}

export interface GroupEntity {
  fieldValue: string;
  totalCount: number;
}

export interface NodesEntity {
  __typename: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  timeToRead: number;
  description?: null;
  tags?: TagsEntity[] | null;
}

export interface TagsEntity {
  name: string;
  slug: string;
}

export interface Context {
  slug: string;
  name: string;
  formatString: string;
}

export interface Page {
  componentChunkName: string;
  path: string;
  webpackCompilationHash: string;
}
