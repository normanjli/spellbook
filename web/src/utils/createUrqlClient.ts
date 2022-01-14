import { cacheExchange } from "@urql/exchange-graphcache";
import {
  AddCharMutation,
  AddChar_SpellMutation,
  GetCharSpellsDocument,
  GetCharSpellsQuery,
  MyCharsDocument,
  MyCharsQuery,
} from "src/generated/graphql";
import { dedupExchange, fetchExchange } from "urql";
import { betterUpdateQuery } from "./betterUpdateQuery";
export const createUrqlClient = (ssrExchange: any) => {
  return {
    url: "",
    fetchOptions: { credentials: "include" } as const,
    exchanges: [
      dedupExchange,
      cacheExchange({
        keys: {
          CharResponse: ({ __typename }) => __typename,
          Char_SpellResponse: () => null,
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
            addCharSpell: (results, args, cache, info) => {
              betterUpdateQuery<AddChar_SpellMutation, GetCharSpellsQuery>(
                cache,
                { query: GetCharSpellsDocument },
                results,
                (result, query) => {
                  if (result.addChar_Spell?.errors) {
                    return query;
                  } else {
                    return {
                      getCharSpells: {
                        __typename: "Char_SpellResponse",
                        errors: null,
                        char_spell: result.addChar_Spell?.char_spell,
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
