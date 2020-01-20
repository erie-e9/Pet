import { ApolloClient, NormalizedCacheObject } from "apollo-boost";
// import { NextContext } from "next";
import { NextPageContext } from "next";
// export interface MyContext extends NextContext {
export interface MyContext extends NextPageContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
