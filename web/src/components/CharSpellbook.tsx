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
import React, { useEffect, useState } from "react";
import { useGetClassQuery, useMyCharsQuery } from "src/generated/graphql";
import SpellAccordion from "./SpellAccordion";

const CharSpellbook: React.FC = () => {
  const { data: session, status } = useSession();
  const [dndClass, setDndClass] = useState("");
  const [{ data: classSpells, fetching }, getClassSpells] = useGetClassQuery({
    variables: { filter: { name: dndClass } },
    pause: true,
  });
  const [{ data: charList }, getMyChars] = useMyCharsQuery({
    variables: { email: session?.user?.email as string },
    pause: true,
  });
  useEffect(() => {
    if (status === "authenticated") {
      getMyChars();
    }
  }, [status, getMyChars]);
  const refreshSpells = async (className: string) => {
    setDndClass(className);
    await getClassSpells();
  };
  return (
    <Tabs
      // orientation="vertical"
      size="lg"
      align="center"
      position={"relative"}
      top="5em"
      variant={"enclosed"}
      isFitted={true}
    >
      <TabList>
        {charList?.myChars?.character
          ? charList.myChars.character.map((character) => (
              <Tab
                key={character.id}
                onClick={() => {
                  refreshSpells(character.class);
                }}
              >
                {`${character.name} the ${character.class}`}
              </Tab>
            ))
          : "Something happened"}
      </TabList>
      <TabPanels>
        {charList?.myChars?.character?.map((character) => {
          return (
            <TabPanel>
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
