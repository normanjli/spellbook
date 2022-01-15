import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { memo } from "react";
import { GetCharSpellsQuery, GetClassQuery } from "src/generated/graphql";
import NoteReader from "./NoteReader";
import SpellPopover from "./SpellPopover";
interface SpellLevelAccordionPanelProps {
  level: number;
  data: GetClassQuery;
  charSpells: GetCharSpellsQuery | undefined;
}
const SpellLevelAccordionPan: React.FC<SpellLevelAccordionPanelProps> = ({
  level,
  charSpells,
  data,
}) => {
  return (
    <AccordionItem>
      <AccordionButton>
        <Heading flex="1" textAlign="left" size="md" key={0}>
          <Box>Level {level} spells</Box>
        </Heading>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        {data.class?.spells
          .filter((spell) => spell.level === level)
          .sort((a, b): any => (a.name as string) > (b.name as string))
          .map((spell) => (
            <AccordionItem key={spell.name}>
              <AccordionButton>
                <Heading flex="1" textAlign="left" size="md" key={spell.name}>
                  <Box>{spell.name}</Box>
                </Heading>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel maxH={"40%"}>
                <Divider />
                <Flex
                  textAlign={"left"}
                  justifyContent={"flex-start"}
                  gap={"2em"}
                  flexDir={{ base: "column", md: "row" }}
                  minW={"20em"}
                >
                  <Text
                    noOfLines={10}
                    w={{ base: "100%", md: "30%" }}
                    overflowY={"auto"}
                    textAlign={"left"}
                    whiteSpace={"pre-line"}
                  >
                    {spell.desc?.map((e) =>
                      e?.replace("***", "\n\n").replace(".***", ":")
                    )}
                  </Text>
                  <Flex flexDir={"column"} w={{ base: "full", md: "40%" }}>
                    <Flex gap={{ base: ".5em", md: "5em" }}>
                      <Stack w={"50%"}>
                        <Text>Level: {spell.level}</Text>
                        <Text>School: {spell.school?.name}</Text>
                        <Text>Duration: {spell.duration}</Text>
                        <Text>
                          DC:
                          {!spell.dc ? " None" : ` ${spell.dc?.dc_type?.name}`}
                        </Text>
                        <Text>Range: {spell.range}</Text>
                        <Text>
                          Area of Effect:{" "}
                          {!spell.area_of_effect
                            ? "None"
                            : `${spell.area_of_effect?.size} foot ${spell.area_of_effect?.type}`}
                        </Text>
                        <Text>
                          Components: {spell.components?.map((e) => `${e} `)}
                        </Text>
                      </Stack>
                      {spell.damage ? (
                        <Stack w={"50%"}>
                          <Text>
                            Damage Type: {spell.damage.damage_type?.name}
                          </Text>
                          <Text>
                            Damage:{" "}
                            {spell.damage.damage_at_slot_level
                              ? Object.values(
                                  spell.damage.damage_at_slot_level
                                )[0]
                              : spell.damage.damage_at_character_level
                              ? Object.values(
                                  spell.damage.damage_at_character_level
                                )[0]
                              : "No damage data"}
                          </Text>
                          <Text>Attack Type: {spell.attack_type}</Text>
                          <Text>Concentration: {`${spell.concentration}`}</Text>
                          <Text>
                            Material: {spell.material ? spell.material : "None"}
                          </Text>
                          <Text>
                            Ritual:
                            {` ${spell.ritual}`}
                          </Text>
                          <Text>
                            Area of Effect:{" "}
                            {!spell.area_of_effect
                              ? "None"
                              : `${spell.area_of_effect?.size} foot ${spell.area_of_effect?.type}`}
                          </Text>
                          <Text>Casting Time: {spell.casting_time}</Text>
                        </Stack>
                      ) : (
                        <Stack w={"50%"}>
                          <Text>
                            Healing:{" "}
                            {spell.heal_at_slot_level
                              ? Object.values(spell.heal_at_slot_level)[0]
                              : "None"}
                          </Text>
                          <Text>
                            Attack Type:{" "}
                            {spell.attack_type ? spell.attack_type : "None"}
                          </Text>
                          <Text>Concentration: {`${spell.concentration}`}</Text>
                          <Text>
                            Material: {spell.material ? spell.material : "None"}
                          </Text>
                          <Text>
                            Ritual:
                            {` ${spell.ritual}`}
                          </Text>
                          <Text>
                            Area of Effect:{" "}
                            {!spell.area_of_effect
                              ? "None"
                              : `${spell.area_of_effect?.size} foot ${spell.area_of_effect?.type}`}
                          </Text>
                          <Text>Casting Time: {spell.casting_time}</Text>
                        </Stack>
                      )}
                    </Flex>
                    {spell.higher_level ? (
                      <>
                        <Divider />
                        <Text>Higher Level: {spell.higher_level}</Text>
                      </>
                    ) : (
                      ""
                    )}
                  </Flex>
                  <Flex h={"100%"} justifySelf={"center"} m="auto">
                    {charSpells?.getCharSpells?.char_spell !== undefined ? (
                      <NoteReader
                        charSpell={
                          charSpells?.getCharSpells?.char_spell?.filter(
                            (e) => e.spell_id === spell.name
                          ) as any
                        }
                      ></NoteReader>
                    ) : (
                      <SpellPopover
                        spellName={spell.name as string}
                        className={data.class?.name as string}
                      ></SpellPopover>
                    )}
                  </Flex>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          ))}
      </AccordionPanel>
    </AccordionItem>
  );
};
const SpellLevelAccordionPanel = memo(SpellLevelAccordionPan);
export default SpellLevelAccordionPanel;
