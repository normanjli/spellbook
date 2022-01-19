import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Character } from "./Character";
import { Note } from "./Note";
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
  @ManyToOne(() => Character, () => Number, {
    onDelete: "CASCADE",
    eager: true,
  })
  @JoinColumn()
  character: Character["id"];

  @Field(() => Number)
  @OneToMany(() => Note, (note) => note.id, { cascade: true })
  note?: Note[];

  @Field()
  @Column()
  spell_id!: string;
}
