import { MyContext } from "src/types";
import {
  Arg,
  Ctx,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { User } from "../entity/User";
import { UserObject } from "../types";

@ObjectType()
class UserResponse {
  @Field(() => String, { nullable: true })
  errors?: string;
  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext) {
    const user = await User.findOne();
    if (user) {
      return user;
    } else {
      return null;
    }
  }
  @Mutation(() => UserResponse, { nullable: true })
  async register(
    @Arg("options") options: UserObject,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await User.findOne({ where: { email: options.email } });
    if (user) {
      return { errors: "user exists", user: user };
    }
    try {
      let user = new User();
      user.name = options.name;
      user.email = options.email;
      await user.save();
      return { errors: undefined, user: user };
    } catch (err) {
      return { errors: err?.message, user: undefined };
    }
  }
}
