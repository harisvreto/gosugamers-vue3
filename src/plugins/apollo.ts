import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core';
import { ApolloLink } from 'apollo-link';

const httpEndpoint = 'https://api.github.com/graphql';

const httpLink = new HttpLink({
  uri: httpEndpoint,
});

const cache = new InMemoryCache();

const authMiddleware = new ApolloLink((operation, forward) => {
    const token = process.env.VUE_APP_GITHUB_GRAPHQL_AUTH_TOKEN;

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : null
      }
    });
  
    return forward(operation);
});

const apolloClient = new ApolloClient({
  link: authMiddleware.concat(httpLink as any) as any,
  cache
})

export {
    apolloClient
};