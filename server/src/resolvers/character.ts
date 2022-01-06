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
  @Query(() => [Character], { nullable: true })
  async charMe(@Arg("options") options: String, @Ctx() { req }: MyContext) {
    const user = await User.findOne({ where: { email: options } });
    if (user) {
      const char = await Character.find({ where: { user: user.id } });
      return char;
    } else {
      return null;
    }
  }
  @Mutation(() => CharResponse, { nullable: true })
  async addChar(
    @Arg("options") options: CharObject,
    @Ctx() { req }: MyContext
  ): Promise<CharResponse> {
    const user = await User.findOne({ where: { email: options.user } });
    if (user) {
      try {
        const char = new Character();
        char.name = options.name;
        char.class = options.class;
        char.user = user.id;
        char.save();
        return { errors: undefined, character: char };
      } catch (err) {
        return { errors: err?.message, character: undefined };
      }
    } else {
      return { errors: "something went wrong", character: undefined };
    }
  }
}
