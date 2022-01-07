import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Char_Spell } from "./Char_Spells";
@ObjectType()
@Entity()
export class Note extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => Number)
  @ManyToOne(() => Char_Spell, (char_spell) => char_spell.id)
  @JoinColumn()
  char_spell: Char_Spell["id"];

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  text: string;
}
