import { cacheExchange } from "@urql/exchange-graphcache";
import {
  AddCharMutation,
  MyCharsDocument,
  MyCharsQuery,
} from "src/generated/graphql";
import { dedupExchange, fetchExchange } from "urql";
import { betterUpdateQuery } from "./betterUpdateQuery";
export const createUrqlClient = (ssrExchange: any) => {
  return {
    url: "http://localhost:3000/api/graphql",
    fetchOptions: { credentials: "include" } as const,
    exchanges: [
      dedupExchange,
      cacheExchange({
        keys: {
          CharResponse: ({ __typename }) => __typename,
          Char_SpellResponse: ({ __typename }) => __typename,
        },
        updates: {
          Mutation: {
            addChar: (results, args, cache, info) => {
              betterUpdateQuery<AddCharMutation, MyCharsQuery>(
                cache,
                { query: MyCharsDocument },
                results,
                (result, query) => {
                  if (result.addChar?.errors) {
                    return query;
                  } else {
                    return {
                      myChars: {
                        __typename: "CharResponse",
                        errors: "",
                        character: result.addChar?.character,
                      },
                    };
                  }
                }
              );
            },
          },
        },
      }),
      ssrExchange,
      fetchExchange,
    ],
  };
};
