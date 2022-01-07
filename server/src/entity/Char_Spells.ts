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
import { Character } from "./Character";
@ObjectType()
@Entity()
export class Char_Spell extends BaseEntity {
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
  @ManyToOne(() => Character, () => Number)
  @JoinColumn()
  character: Character["id"];

  @Field()
  @Column()
  spell_id!: string;
}
