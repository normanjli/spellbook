import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Char_Spell {
  @PrimaryColumn()
  Character_id: number;

  @PrimaryColumn()
  spell_id: number;
}
