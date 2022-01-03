import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  UpdateDateColumn,
  CreateDateColumn,
  BaseEntity,
} from "typeorm";
import { User } from "./User";
import { Field } from "type-graphql";
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

  @Field()
  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Field()
  @Column()
  char_name: string;

  @Field()
  @Column()
  class: string;
}
