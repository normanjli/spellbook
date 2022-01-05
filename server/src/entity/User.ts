import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Character } from "./Character";
@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ unique: true })
  email!: string;

  @Field(() => [Character])
  @OneToMany(() => Character, (character) => character)
  character: Character[];
}
