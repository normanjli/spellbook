import { cacheExchange } from "@urql/exchange-graphcache";
import {
  AddCharMutation,
  AddChar_SpellMutation,
  CreateNoteMutation,
  DeleteCharSpellMutation,
  GetCharSpellsDocument,
  GetCharSpellsQuery,
  MyCharsDocument,
  MyCharsQuery,
  MyNotesDocument,
  MyNotesQuery,
} from "src/generated/graphql";
import { dedupExchange, fetchExchange } from "urql";
import { betterUpdateQuery } from "./betterUpdateQuery";
export const createUrqlClient = (ssrExchange: any) => {
  return {
    url: process.env.NEXT_PUBLIC_API_URL,
    fetchOptions: { credentials: "include" } as const,
    exchanges: [
      dedupExchange,
      cacheExchange({
        keys: {
          CharResponse: ({ __typename }) => __typename,
          Char_SpellResponse: ({ __typename }) => __typename,
          NoteResponse: ({ __typename }) => __typename,
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
            addNote: (results, args, cache, info) => {
              betterUpdateQuery<CreateNoteMutation, MyNotesQuery>(
                cache,
                { query: MyNotesDocument },
                results,
                (result, query) => {
                  if (result.createNote?.errors) {
                    return query;
                  } else {
                    return {
                      myNotes: {
                        errors: null,
                        note: result.createNote?.note,
                      },
                    };
                  }
                }
              );
            },
            deleteCharSpell: (results, args, cache, info) => {
              betterUpdateQuery<DeleteCharSpellMutation, GetCharSpellsQuery>(
                cache,
                { query: GetCharSpellsDocument },
                results,
                (result, query) => {
                  if (result.deleteCharSpell?.errors) {
                    return query;
                  } else {
                    return {
                      getCharSpells: {
                        errors: null,
                        char_spell: result.deleteCharSpell?.char_spell,
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
