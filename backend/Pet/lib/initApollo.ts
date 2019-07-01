// tslint:disable-next-line:prettier
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "apollo-boost"
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import fetch from "isomorphic-unfetch";
import { isBrowser } from "./isBrowser";
import { onError } from "apollo-link-error";
import Router from "next/router";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  // @ts-ignore
  global.fetch = fetch;
}

interface Options {
  getToken: () => string;
}

function create(initialState: any, { getToken }: Options) {
  const httpLink = createHttpLink({
    // ERT: 23/05/2019
    // Change GraphQL uri and credentials
    uri: "http://localhost:4000/graphql",
    // credentials: "same-origin"
    credentials: "include"
    // uri: 'https://api.graph.cool/simple/v1/cj5geu3slxl7t0127y8sity9r',
    // credentials: 'same-origin'
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location : ${locations}, Path: ${path}`
        );
        if (isBrowser && message.includes("Unauthorized")) {
          Router.replace("/login");
        }
      });
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();
    // const genericToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2VkNzM2MjBmMWJjZTgwZDQzNzBhN2UiLCJpYXQiOjE1NTkwNjU0NDJ9.IZxdkDmRpJUze58vG1gnx0kF8LtQBNa2vbAQqjXdGSE'
    const genericToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDE2MzFlZDg1NWE0YjU0YTAyNTllZjAiLCJpYXQiOjE1NjE3NDkwOTF9.smF1ARA89WpsxfmEJAGWqTh4Qu13q5US_99ktgxVwDc";
    return {
      headers: {
        ...headers,
        // ERT: 23/05/2019
        // Change token to cookie
        // cookie: token ? `qid=${token}` : ''
        authorization: token ? `Bearer ${token}` : `Bearer ${genericToken}`
        // authorization: `Bearer ${token}`
      }
    };
  });

  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: errorLink.concat(authLink.concat(httpLink)),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState: any, options: Options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
