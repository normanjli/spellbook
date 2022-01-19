import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { Note } from "../entity/Note";
import { MyContext, NoteObject, UpdateNoteObject } from "../types";

@ObjectType()
class NoteResponse {
  @Field(() => String, { nullable: true })
  errors?: string;
  @Field(() => [Note], { nullable: true })
  note?: Note[] | null;
}

@Resolver()
export class NoteResolver {
  @Query(() => NoteResponse, { nullable: true })
  async myNotes(@Arg("options") options: number, @Ctx() { req }: MyContext) {
    try {
      const note = await Note.find({
        where: { char_spell: options },
      });
      if (note.length > 0) {
        return { errors: null, note: [...note] };
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
      return {
        errors: undefined,
        note: [
          ...(await Note.find({
            where: { char_spell: options.char_spellId },
          })),
        ],
      };
    } catch (err) {
      return { errors: err?.message, note: undefined };
    }
  }
  @Mutation(() => String, { nullable: true })
  async upateNote(
    @Arg("options") options: UpdateNoteObject,
    @Ctx() { req }: MyContext
  ): Promise<String> {
    try {
      await Note.update(options.noteId, {
        text: options.text,
        title: options.title,
      });
      return "Success";
    } catch (err) {
      return err.message;
    }
  }
  @Mutation(() => String, { nullable: true })
  async deleteNote(
    @Arg("noteId") noteId: number,
    @Ctx() { req }: MyContext
  ): Promise<String> {
    try {
      await Note.delete(noteId);
      return "Success";
    } catch (err) {
      return "Something went wrong";
    }
  }
}
