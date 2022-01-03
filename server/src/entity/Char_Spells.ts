import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Field } from "type-graphql";

@Entity()
export class Char_Spell extends BaseEntity {
  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @PrimaryColumn()
  Character_id: number;

  @Field()
  @PrimaryColumn()
  spell_id: number;
}
