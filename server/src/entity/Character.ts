import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Char_Spell } from "./Char_Spells";
import { User } from "./User";
@ObjectType()
@Entity()
export class Character extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => String)
  @ManyToOne(() => User, (user) => user.email)
  user: User["email"];

  @Field(() => Number)
  @OneToMany(() => Char_Spell, (charspell) => charspell.id, {
    cascade: true,
  })
  charspell?: Char_Spell[];

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  class!: string;
}
