import { Accordion, Button, Heading } from "@chakra-ui/react";
import React, { memo, useMemo } from "react";
import { GetClassQuery, useGetCharSpellsQuery } from "../generated/graphql";
import SpellLevelAccordionPanel from "./SpellLevelAccordionPanel";

interface SpellAccordionProps {
  charId: number;
  classSpells: GetClassQuery | undefined;
}
const CharSpellAcc: React.FC<SpellAccordionProps> = ({
  charId,
  classSpells,
}) => {
  const [{ data: charSpells }, getCharSpells] = useGetCharSpellsQuery({
    variables: { options: charId },
    requestPolicy: "cache-and-network",
  });
  const data = useMemo(() => {
    if (charSpells?.getCharSpells?.char_spell && classSpells?.class?.spells) {
      const flatArray = charSpells.getCharSpells?.char_spell?.map(
        (e) => e.spell_id
      ) as string[];
      return {
        class: {
          spells: classSpells.class?.spells.filter((spell) => {
            return !!flatArray.includes(spell.name as string);
          }),
        },
      };
    } else {
      return undefined;
    }
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
    return (
      <Button onClick={getCharSpells}>
        <Heading>Refresh the Spellbook</Heading>;
      </Button>
    );
  }
};
const CharSpellAccordion = memo(CharSpellAcc);
export default CharSpellAccordion;
