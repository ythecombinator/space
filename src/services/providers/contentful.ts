import { ApolloClient, HttpLink, InMemoryCache, type OperationVariables, type QueryOptions } from '@apollo/client';

//  ---------------------------------------------------------------------------
//  CONFIG
//  ---------------------------------------------------------------------------

const CONTENTFUL_HEADERS = {
  Authorization: `Bearer ${process.env.CONTENTFUL_TOKEN}`,
};

//  ---------------------------------------------------------------------------
//  CORE
//  ---------------------------------------------------------------------------

export default class ContentfulService {
  private static instance: ContentfulService;
  private apoloClient: ApolloClient;

  private constructor(endpoint: string, headers: Record<string, string>) {
    this.apoloClient = new ApolloClient({
      link: new HttpLink({ uri: endpoint, headers }),
      cache: new InMemoryCache(),
    });
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ContentfulService(process.env.CONTENTFUL_ENDPOINT!, CONTENTFUL_HEADERS);
    }

    return this.instance;
  }

  public query<T>(options: QueryOptions<OperationVariables, T>) {
    return this.apoloClient.query({ ...options, errorPolicy: 'none' });
  }
}
