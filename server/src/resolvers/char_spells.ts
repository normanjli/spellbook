import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { Char_Spell } from "../entity/Char_Spells";
import { Char_SpellObject, MyContext } from "../types";

@ObjectType()
class Char_SpellResponse {
  @Field(() => String, { nullable: true })
  errors?: string | null;
  @Field(() => [Char_Spell], { nullable: true })
  char_spell?: Char_Spell[] | null;
}

@Resolver()
export class Char_SpellResolver {
  @Query(() => Char_SpellResponse, { nullable: true })
  async getCharSpells(
    @Arg("options") options: number,
    @Ctx() { req }: MyContext
  ): Promise<Char_SpellResponse> {
    try {
      const charSpell = await Char_Spell.find({
        where: { character: options },
      });
      if (charSpell.length > 0) {
        return { errors: null, char_spell: [...charSpell] };
      } else {
        return { errors: "Add some Spells", char_spell: null };
      }
    } catch (err) {
      return { errors: err?.message, char_spell: null };
    }
  }
  @Mutation(() => Char_SpellResponse, { nullable: true })
  async addChar_Spell(
    @Arg("options") options: Char_SpellObject,
    @Ctx() { req }: MyContext
  ): Promise<Char_SpellResponse> {
    try {
      if (
        await Char_Spell.findOne({
          where: { spell_id: options.spellName, character: options.charId },
        })
      ) {
        return {
          errors: "Character already has this spell",
          char_spell: [
            ...(await Char_Spell.find({
              where: { character: options.charId },
            })),
          ],
        };
      } else {
        const charSpell = new Char_Spell();
        charSpell.character = options.charId;
        charSpell.spell_id = options.spellName;
        await charSpell.save();
        return {
          errors: undefined,
          char_spell: [
            ...(await Char_Spell.find({
              where: { character: options.charId },
            })),
          ],
        };
      }
    } catch (err) {
      return {
        errors: "something went wrong",
        char_spell: undefined,
      };
    }
  }
  @Mutation(() => Char_SpellResponse, { nullable: true })
  async deleteCharSpell(
    @Arg("charSpellId") charSpellId: number,
    @Ctx() { req }: MyContext
  ): Promise<Char_SpellResponse> {
    try {
      const charSpell = await Char_Spell.findOne(charSpellId);
      console.log(charSpell);
      await Char_Spell.delete(charSpellId);
      return {
        errors: undefined,
        char_spell: [
          ...(await Char_Spell.find({
            where: { character: charSpell?.character },
          })),
        ],
      };
    } catch (err) {
      return { errors: err?.message, char_spell: undefined };
    }
  }
}
