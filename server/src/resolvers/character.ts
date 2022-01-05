import chakraUiTheme from "@chakra-ui/theme";
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
import { CharObject, MyContext, UserObject } from "../types";

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
  async me(@Arg("options") options: CharObject, @Ctx() { req }: MyContext) {
    const user = await User.findOne({ id: options.id });
    if (user) {
      return user;
    } else {
      return null;
    }
  }
  @Mutation(() => CharResponse, { nullable: true })
  async register(
    @Arg("options") options: CharObject,
    @Ctx() { req }: MyContext
  ): Promise<CharResponse> {
    const user = await User.findOne({ id: options.id });
    if (user) {
      try {
        const char = new Character();
        char.name = options.name;
        char.class = options.class;
        char.user = options.id;
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
