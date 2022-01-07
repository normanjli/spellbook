import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Character } from "./Character";
@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @Column()
  name: string;

  @Field()
  @PrimaryColumn({ unique: true })
  email!: string;

  @Field(() => [Number])
  @OneToMany(() => Character, (character) => character.id)
  @JoinColumn()
  character: Character["id"][];

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
