import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { Character } from "../entity/Character";
import { User } from "../entity/User";
import { CharObject, MyContext } from "../types";

@ObjectType()
class CharResponse {
  @Field(() => String, { nullable: true })
  errors?: string;
  @Field(() => Character, { nullable: true })
  character?: Character;
}

@Resolver()
export class CharResolver {
  @Query(() => CharResponse, { nullable: true })
  async myChars(@Arg("email") email: String, @Ctx() { req }: MyContext) {
    try {
      const char = await Character.find({ where: { userId: email } });
      if (char) {
        console.log(char);
        return { errors: null, character: char };
      } else {
        return { errors: "Add some Characters", character: null };
      }
    } catch (err) {
      return { errors: err?.message, character: undefined };
    }
  }
  @Mutation(() => CharResponse, { nullable: true })
  async addChar(
    @Arg("options") options: CharObject,
    @Ctx() { req }: MyContext
  ): Promise<CharResponse> {
    try {
      const user = await User.findOne({ where: { email: options.user } });
      if (user) {
        const char = new Character();
        char.name = options.name;
        char.class = options.class;
        char.user = user.email;
        char.save();
        return { errors: undefined, character: char };
      } else {
        return { errors: "something went wrong", character: undefined };
      }
    } catch (err) {
      return { errors: err?.message, character: undefined };
    }
  }
}
