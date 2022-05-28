import { ApolloClient, InMemoryCache } from '@apollo/client';

const CONTENTFUL_ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/49ay1wkx3zpm`;

const CONTENTFUL_HEADERS = {
  Authorization: `Bearer i9MdcylsuzLkgf-7WLpi_moE0uva2HeZXtPti-1bOoM`,
};

const service = new ApolloClient({
  uri: CONTENTFUL_ENDPOINT,
  cache: new InMemoryCache(),
  headers: CONTENTFUL_HEADERS,
});

export default service;
