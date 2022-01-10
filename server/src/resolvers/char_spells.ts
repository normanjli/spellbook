import { Char_Spell } from "../entity/Char_Spells";
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
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
      const charSpell = new Char_Spell();
      charSpell.character = options.charId;
      charSpell.spell_id = options.spellName;
      charSpell.save();
      return { errors: undefined, char_spell: [charSpell] };
    } catch (err) {
      return { errors: err?.message, char_spell: undefined };
    }
  }
  @Mutation(() => String, { nullable: true })
  async deleteCharSpell(
    @Arg("charSpellId") charSpellId: number,
    @Ctx() { req }: MyContext
  ): Promise<String> {
    try {
      Char_Spell.delete(charSpellId);
      return "Success";
    } catch (err) {
      return "Something went wrong";
    }
  }
}
