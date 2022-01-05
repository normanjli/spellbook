// import { cacheExchange } from "@urql/exchange-graphcache";
import { dedupExchange, fetchExchange } from "urql";
// import { RegisterDocument, RegisterMutation } from "../generated/graphql";
// import { betterUpdateQuery } from "./betterUpdateQuery";
export const createUrqlClient = (ssrExchange: any) => {
  return {
    url: "http://localhost:4000/graphql",
    fetchOptions: { credentials: "include" } as const,
    exchanges: [
      dedupExchange,
      // cacheExchange({
      //   updates: {
      //     Mutation: {
      //       register: (results, args, cache, info) => {
      //         betterUpdateQuery<RegisterMutation>(
      //           cache,
      //           { query: RegisterDocument },
      //           results,
      //           (result, query) => {
      //             if (result.register.errors) {
      //               return query;
      //             } else {
      //               return { me: result.register.user };
      //             }
      //           }
      //         );
      //       },
      //     },
      //   },
      // }),
      ssrExchange,
      fetchExchange,
    ],
  };
};
