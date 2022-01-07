import { GetClassQuery } from "src/generated/graphql";

export const spellHandler = (classSpellList: GetClassQuery) => {
  if (classSpellList.class?.spells) {
    classSpellList.class.spells.sort((a, b) => {
      return (a.level as number) - (b.level as number);
    });
  }
  return classSpellList;
};

// const spellLevel0: spellLevelObj = { spells: [] };
// const spellLevel1: spellLevelObj = { spells: [] };
// const spellLevel2: spellLevelObj = { spells: [] };
// const spellLevel3: spellLevelObj = { spells: [] };
// const spellLevel4: spellLevelObj = { spells: [] };
// const spellLevel5: spellLevelObj = { spells: [] };
// const spellLevel6: spellLevelObj = { spells: [] };
// const spellLevel7: spellLevelObj = { spells: [] };
// const spellLevel8: spellLevelObj = { spells: [] };
// const spellLevel9: spellLevelObj = { spells: [] };
// const spellLevel: spellLevelObj = { spells: [] };
// switch (spell.level) {
//   case 0:
//     spellLevel0.spells.push(spell);
//     break;
//   case 1:
//     spellLevel1.spells.push(spell);
//     break;
//   case 2:
//     spellLevel2.spells.push(spell);
//     break;
//   case 3:
//     spellLevel3.spells.push(spell);
//     break;
//   case 4:
//     spellLevel4.spells.push(spell);
//     break;
//   case 5:
//     spellLevel5.spells.push(spell);
//     break;
//   case 6:
//     spellLevel6.spells.push(spell);
//     break;
//   case 7:
//     spellLevel7.spells.push(spell);
//     break;
//   case 8:
//     spellLevel8.spells.push(spell);
//     break;
//   case 9:
//     spellLevel9.spells.push(spell);
//     break;
//   default:
//     spellLevel.spells.push(spell);
// }
// interface spellLevelObj {
//   spells: Array<{
//     __typename?: "Spell";
//     name?: string | null | undefined;
//     attack_type?: string | null | undefined;
//     casting_time?: string | null | undefined;
//     components?: Array<string | null | undefined> | null | undefined;
//     concentration?: boolean | null | undefined;
//     desc?: Array<string | null | undefined> | null | undefined;
//     duration?: string | null | undefined;
//     heal_at_slot_level?: any | null | undefined;
//     higher_level?: Array<string | null | undefined> | null | undefined;
//     level?: number | null | undefined;
//     material?: string | null | undefined;
//     range?: string | null | undefined;
//     ritual?: boolean | null | undefined;
//     area_of_effect?:
//       | {
//           __typename?: "SpellArea_of_effect";
//           size?: number | null | undefined;
//           type?: string | null | undefined;
//         }
//       | null
//       | undefined;
//     damage?:
//       | {
//           __typename?: "SpellDamage";
//           damage_at_character_level?: any | null | undefined;
//           damage_at_slot_level?: any | null | undefined;
//           damage_type?:
//             | {
//                 __typename?: "SpellDamageDamage_type";
//                 name?: string | null | undefined;
//               }
//             | null
//             | undefined;
//         }
//       | null
//       | undefined;
//     dc?:
//       | {
//           __typename?: "SpellDc";
//           dc_success?: string | null | undefined;
//           desc?: string | null | undefined;
//           dc_type?:
//             | {
//                 __typename?: "SpellDcDc_type";
//                 name?: string | null | undefined;
//               }
//             | null
//             | undefined;
//         }
//       | null
//       | undefined;
//     school?:
//       | { __typename?: "MagicSchool"; name?: string | null | undefined }
//       | null
//       | undefined;
//     subclasses?:
//       | Array<
//           | { __typename?: "SpellSubclasses"; name?: string | null | undefined }
//           | null
//           | undefined
//         >
//       | null
//       | undefined;
//   }>;
// }
