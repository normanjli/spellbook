import {
  Center,
  Skeleton,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { useEffect, useState } from "react";
import { useGetClassQuery } from "src/generated/graphql";
import { createUrqlClient } from "src/utils/createUrqlClient";
import { spellHandler } from "src/utils/spellOrder";
import Navbar from "../components/Navbar";

const BrowseSpells: NextPage = () => {
  const [dndClass, setDndClass] = useState("Bard");
  const [{ data, fetching }, getClass] = useGetClassQuery({
    variables: { filter: { name: dndClass } },
  });
  useEffect(() => {
    if (data) {
      getClass();
      spellHandler(data);
    }
  }, [dndClass]);
  return (
    <>
      <Navbar location="Browsing Spells"></Navbar>
      <Center></Center>
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
          <Tab
            onClick={async () => {
              setDndClass("Bard");
            }}
          >
            Bard
          </Tab>
          <Tab
            onClick={async () => {
              setDndClass("Cleric");
            }}
          >
            Cleric
          </Tab>
          <Tab>Druid</Tab>
          <Tab>Paladin</Tab>
          <Tab>Ranger</Tab>
          <Tab>Sorcerer</Tab>
          <Tab>Wizard</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {!fetching ? (
              data?.class?.spells.map((e) => <p key={e.name}>{e.name}</p>)
            ) : (
              <Stack>
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            )}
          </TabPanel>
          <TabPanel>
            {!fetching ? (
              data?.class?.spells.map((e) => <p key={e.name}>{e.name}</p>)
            ) : (
              <Stack>
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            )}
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(BrowseSpells);
