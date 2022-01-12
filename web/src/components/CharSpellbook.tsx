import {
  Skeleton,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React, { useContext, useEffect, useState } from "react";
import { CharacterContext } from "src/context/characterContext";
import {
  useGetCharSpellsQuery,
  useGetClassQuery,
  useMyCharsQuery,
} from "src/generated/graphql";
import SpellAccordion from "./SpellAccordion";

const CharSpellbook: React.FC = () => {
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
  const [, getCharSpells] = useGetCharSpellsQuery({
    variables: { options: charId as number },
    pause: true,
  });
  useEffect(() => {
    if (status === "authenticated") {
      getMyChars();
    }
  }, [status, getMyChars]);
  useEffect(() => {
    getCharSpells();
    getClassSpells();
  }, [charId, dndClass]);

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
                console.log(charId, dndClass);
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
                <SpellAccordion data={classSpells} />
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

export default CharSpellbook;
