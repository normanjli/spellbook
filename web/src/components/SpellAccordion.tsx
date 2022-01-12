import {
  Accordion,
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
import React from "react";
import { GetClassQuery } from "src/generated/graphql";

interface SpellAccordionProps {
  data: GetClassQuery;
}
const SpellAccordion: React.FC<SpellAccordionProps> = ({ data }) => {
  return (
    <Accordion allowMultiple allowToggle>
      {data.class?.spells
        .sort((a, b) => (a.level as number) - (b.level as number))
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
              >
                <Text
                  noOfLines={10}
                  w={"30%"}
                  overflowY={"scroll"}
                  textAlign={"left"}
                  whiteSpace={"pre-line"}
                >
                  {spell.desc?.map((e) =>
                    e?.replace("***", "\n\n").replace(".***", ":")
                  )}
                </Text>
                <Flex flexDir={"column"} w={"40%"}>
                  <Flex gap={"5em"}>
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
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        ))}
    </Accordion>
  );
};
export default SpellAccordion;
