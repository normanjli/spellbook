import { Accordion } from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import { GetCharSpellsQuery, GetClassQuery } from "../generated/graphql";
import SpellLevelAccordionPanel from "./SpellLevelAccordionPanel";

interface SpellAccordionProps {
  charSpells: GetCharSpellsQuery;
  classSpells: GetClassQuery;
}
const charSpellAcc: React.FC<SpellAccordionProps> = ({
  charSpells,
  classSpells,
}) => {
  const [data, setData] = useState<GetClassQuery>();
  useEffect(() => {
    const flatArray = charSpells.getCharSpells?.char_spell?.map(
      (e) => e.spell_id
    ) as string[];
    setData({
      class: {
        spells: classSpells.class?.spells.filter((spell) => {
          return !!flatArray.includes(spell.name as string);
        }) as any,
      },
    });
  }, [charSpells, classSpells]);
  if (data) {
    return (
      <Accordion allowMultiple allowToggle>
        <SpellLevelAccordionPanel
          data={data}
          charSpells={charSpells}
          level={0}
        />
        <SpellLevelAccordionPanel
          data={data}
          charSpells={charSpells}
          level={1}
        />
        <SpellLevelAccordionPanel
          data={data}
          charSpells={charSpells}
          level={2}
        />
        <SpellLevelAccordionPanel
          data={data}
          charSpells={charSpells}
          level={3}
        />
        <SpellLevelAccordionPanel
          data={data}
          charSpells={charSpells}
          level={4}
        />
        <SpellLevelAccordionPanel
          data={data}
          charSpells={charSpells}
          level={5}
        />
        <SpellLevelAccordionPanel
          data={data}
          charSpells={charSpells}
          level={6}
        />
        <SpellLevelAccordionPanel
          data={data}
          charSpells={charSpells}
          level={7}
        />
        <SpellLevelAccordionPanel
          data={data}
          charSpells={charSpells}
          level={8}
        />
        <SpellLevelAccordionPanel
          data={data}
          charSpells={charSpells}
          level={9}
        />
      </Accordion>
    );
  } else {
    return <>try again dummy</>;
  }
};
const CharSpellAccordion = memo(charSpellAcc);
export default CharSpellAccordion;
