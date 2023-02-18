import {
  ApolloClient,
  ApolloQueryResult,
  InMemoryCache,
  NormalizedCacheObject,
  OperationVariables,
  QueryOptions,
} from '@apollo/client';

/*~
 * CONFIG
 */

const CONTENTFUL_HEADERS = {
  Authorization: `Bearer ${process.env.CONTENTFUL_TOKEN}`,
};

/*~
 * SERVICE
 */

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
        process.env.CONTENTFUL_ENDPOINT,
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
