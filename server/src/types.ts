import { Field, InputType } from "type-graphql";
import { Request, Response } from "express";
import { User } from "./entity/User";

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
  id: User["id"];
}
