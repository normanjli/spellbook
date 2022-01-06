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
  @Field(() => String)
  user: String;
}
