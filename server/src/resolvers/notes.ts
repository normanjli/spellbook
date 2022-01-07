import { Char_Spell } from "../entity/Char_Spells";
import { Note } from "../entity/Note";
import { MyContext, NoteObject } from "../types";
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";

@ObjectType()
class NoteResponse {
  @Field(() => String, { nullable: true })
  errors?: string;
  @Field(() => Note, { nullable: true })
  note?: Note;
}

@Resolver()
export class NoteResolver {
  @Query(() => NoteResponse, { nullable: true })
  async myNotes(
    @Arg("options") options: NoteObject,
    @Ctx() { req }: MyContext
  ) {
    try {
      const note = await Char_Spell.find({
        where: { spell_id: options.char_spellId },
      });
      if (note) {
        console.log(note);
        return { errors: null, note: note };
      } else {
        return { errors: "Add some Notes", note: null };
      }
    } catch (err) {
      return { errors: err?.message, note: undefined };
    }
  }
  @Mutation(() => NoteResponse, { nullable: true })
  async createNote(
    @Arg("options") options: NoteObject,
    @Ctx() { req }: MyContext
  ): Promise<NoteResponse> {
    try {
      const note = new Note();
      note.title = options.title;
      note.text = options.text;
      note.char_spell = options.char_spellId;
      await note.save();
      return { errors: undefined, note: note };
    } catch (err) {
      return { errors: err?.message, note: undefined };
    }
  }
}
