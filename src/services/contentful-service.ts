import {
  ApolloClient,
  ApolloQueryResult,
  InMemoryCache,
  NormalizedCacheObject,
  OperationVariables,
  QueryOptions,
} from '@apollo/client';

const CONTENTFUL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/49ay1wkx3zpm`;

const CONTENTFUL_HEADERS = {
  Authorization: `Bearer i9MdcylsuzLkgf-7WLpi_moE0uva2HeZXtPti-1bOoM`,
};

export default class ContentfulService {
  private static instance: ContentfulService;
  private apoloClient: ApolloClient<NormalizedCacheObject>;

  private constructor(endpoint: string, headers: Record<string, string>) {
    this.apoloClient = new ApolloClient({
      uri: endpoint,
      cache: new InMemoryCache(),
      headers: headers,
    });
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ContentfulService(
        CONTENTFUL_ENDPOINT,
        CONTENTFUL_HEADERS
      );
    }

    return this.instance;
  }

  public query<T = any, TVariables = OperationVariables>(
    options: QueryOptions<TVariables, T>
  ): Promise<ApolloQueryResult<T>> {
    return this.apoloClient.query(options);
  }
}
