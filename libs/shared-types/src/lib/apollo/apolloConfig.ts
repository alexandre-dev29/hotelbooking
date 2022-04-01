import { ApolloClient, InMemoryCache } from '@apollo/client';

export const getApolloClient = (uri: string) => {
  return new ApolloClient({ uri: uri, cache: new InMemoryCache() });
};
