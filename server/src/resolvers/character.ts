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
  errors?: string | null;
  @Field(() => Character, { nullable: true })
  character?: Character[] | null | Character;
}

@Resolver()
export class CharResolver {
  @Query(() => CharResponse, { nullable: true })
  async myChars(@Arg("email") email: String, @Ctx() { req }: MyContext) {
    try {
      const char = await Character.find({ where: { user: email } });
      if (char) {
        console.log(char);
        return { errors: null, character: [...char] };
      } else {
        return { errors: "Add some Characters", character: null };
      }
    } catch (err) {
      console.log(err.message);
      return { errors: err?.message, character: null };
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
        return { errors: null, character: [char] };
      } else {
        return { errors: "something went wrong", character: null };
      }
    } catch (err) {
      return { errors: err?.message, character: null };
    }
  }
  @Mutation(() => String, { nullable: true })
  async deleteChar(
    @Arg("charId") charId: number,
    @Ctx() { req }: MyContext
  ): Promise<String> {
    try {
      Character.delete(charId);
      return "Success";
    } catch (err) {
      return "Something went wrong";
    }
  }
}
