import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Skeleton,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React, { memo, useContext, useEffect, useState } from "react";
import { CharacterContext } from "src/context/characterContext";
import {
  useGetCharSpellsQuery,
  useGetClassQuery,
  useMyCharsQuery,
} from "src/generated/graphql";
import CharSpellAccordion from "./CharSpellAccordion";
import SpellAccordion from "./SpellAccordion";

const CharSpellboo: React.FC = () => {
  const { data: session, status } = useSession();
  const { character } = useContext(CharacterContext) as CharContext;
  const [dndClass, setDndClass] = useState<string>(
    character?.className ? character?.className : ""
  );
  const [charId, setCharId] = useState<number>(
    character?.id ? character?.id : NaN
  );
  const [{ data: classSpells, fetching }, getClassSpells] = useGetClassQuery({
    variables: { filter: { name: dndClass } },
    pause: true,
  });
  const [{ data: charList }, getMyChars] = useMyCharsQuery({
    variables: { email: session?.user?.email as string },
    pause: true,
  });
  const [{ data: charSpells }, getCharSpells] = useGetCharSpellsQuery({
    variables: { options: charId as number },
    pause: true,
  });
  useEffect(() => {
    if (status === "authenticated") {
      getMyChars();
    }
  }, [status, getMyChars]);
  useEffect(() => {
    if (charId && dndClass) {
      getCharSpells();
      getClassSpells();
    } else if (charList?.myChars?.character && !charId && !dndClass) {
      setCharId(charList.myChars?.character[0].id);
      setDndClass(charList.myChars.character[0].class);
    }
  }, [charId, dndClass, charList]);

  return (
    <Tabs
      size="lg"
      align="center"
      position={"relative"}
      top="4em"
      variant={"enclosed"}
      isFitted={true}
      isLazy
      defaultIndex={character ? character.index : 0}
    >
      <TabList>
        {charList?.myChars?.character ? (
          charList.myChars.character.map((character) => (
            <Tab
              key={character.id}
              onClick={() => {
                setDndClass(character.class);
                setCharId(character.id);
              }}
            >
              {`${character.name} the ${character.class}`}
            </Tab>
          ))
        ) : (
          <Stack w="full">
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        )}
      </TabList>
      <TabPanels>
        {charList?.myChars?.character?.map((character) => {
          return (
            <TabPanel key={character.id}>
              {!fetching && classSpells ? (
                <Accordion allowMultiple allowToggle>
                  <AccordionItem>
                    <AccordionButton>
                      <Heading flex="1" textAlign="left" size="md" key={0}>
                        <Box>{`${character.name}'s Spellbook`}</Box>
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      {charSpells?.getCharSpells?.char_spell ? (
                        <CharSpellAccordion
                          charSpells={charSpells as any}
                          classSpells={classSpells}
                        />
                      ) : (
                        <Heading>Add Some Spells yo</Heading>
                      )}
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton>
                      <Heading flex="1" textAlign="left" size="md" key={0}>
                        <Box>All class spells</Box>
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <SpellAccordion data={classSpells} />
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Stack>
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                  <Skeleton height="20px" />
                </Stack>
              )}
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};
const CharSpellbook = memo(CharSpellboo);
export default CharSpellbook;
