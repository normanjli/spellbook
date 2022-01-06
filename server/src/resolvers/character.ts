import { Arg, Ctx, Field, Mutation, ObjectType, Resolver } from "type-graphql";
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
  @Mutation(() => [Character], { nullable: true })
  async charMe(@Arg("email") email: String, @Ctx() { req }: MyContext) {
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      const char = await Character.find({ where: { user: user.id } });
      console.log(char);
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
