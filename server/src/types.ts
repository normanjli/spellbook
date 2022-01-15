import { Request, Response } from "express";
import { Field, InputType } from "type-graphql";

export type MyContext = {
  req: Request;
  res: Response;
};
declare module "express-session" {
  interface Session {
    userId: number;
  }
}
@InputType()
export class UserObject {
  @Field()
  email: string;
  @Field()
  name: string;
}
@InputType()
export class CharObject {
  @Field()
  name: string;
  @Field()
  class: string;
  @Field()
  user: string;
}

@InputType()
export class Char_SpellObject {
  @Field()
  charId: number;
  @Field()
  spellName: string;
}

@InputType()
export class NoteObject {
  @Field()
  char_spellId: number;
  @Field()
  text: string;
  @Field()
  title: string;
}
@InputType()
export class UpdateCharObject {
  @Field()
  charId: number;
  @Field()
  name: string;
}
@InputType()
export class UpdateNoteObject {
  @Field()
  noteId: number;
  @Field()
  text?: string;
  @Field()
  title?: string;
}
