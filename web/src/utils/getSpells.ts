import axios from "axios";
import apiUrl from "./api";

type className =
  | "bard"
  | "cleric"
  | "druid"
  | "paladin"
  | "ranger"
  | "sorcerer"
  | "wizard";
interface getSpellsParams {
  className: className;
}
export const getSpells = (className: getSpellsParams) => {
  axios.get(apiUrl + className + "/spells");
};
