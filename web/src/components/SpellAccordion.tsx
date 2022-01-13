import { Accordion } from "@chakra-ui/react";
import React, { memo } from "react";
import { GetClassQuery } from "src/generated/graphql";
import SpellLevelAccordionPanel from "./SpellLevelAccordionPanel";

interface SpellAccordionProps {
  data: GetClassQuery;
}
const spellAcc: React.FC<SpellAccordionProps> = ({ data }) => {
  return (
    <Accordion allowMultiple allowToggle>
      <SpellLevelAccordionPanel data={data} charSpells={"no"} level={0} />
      <SpellLevelAccordionPanel data={data} charSpells={"no"} level={1} />
      <SpellLevelAccordionPanel data={data} charSpells={"no"} level={2} />
      <SpellLevelAccordionPanel data={data} charSpells={"no"} level={3} />
      <SpellLevelAccordionPanel data={data} charSpells={"no"} level={4} />
      <SpellLevelAccordionPanel data={data} charSpells={"no"} level={5} />
      <SpellLevelAccordionPanel data={data} charSpells={"no"} level={6} />
      <SpellLevelAccordionPanel data={data} charSpells={"no"} level={7} />
      <SpellLevelAccordionPanel data={data} charSpells={"no"} level={8} />
      <SpellLevelAccordionPanel data={data} charSpells={"no"} level={9} />
    </Accordion>
  );
};
const SpellAccordion = memo(spellAcc);
export default SpellAccordion;
