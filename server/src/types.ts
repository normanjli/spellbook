import { Field, InputType } from "type-graphql";
import { Request, Response } from "express";

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
