import { Field } from "type-graphql";
import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Char_Spell {
  @Field()
  @PrimaryColumn()
  Character_id: number;

  @Field()
  @PrimaryColumn()
  spell_id: number;
}
