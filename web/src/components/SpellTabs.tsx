import {
  Skeleton,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useGetClassQuery } from "src/generated/graphql";
import SpellAccordion from "./SpellAccordion";

const SpellTabs: React.FC = () => {
  const [dndClass, setDndClass] = useState("Bard");
  const [{ data, fetching }, getClassSpells] = useGetClassQuery({
    variables: { filter: { name: dndClass } },
  });
  const refreshSpells = (className: string, data: any) => {
    setDndClass(className);
    if (data) {
      getClassSpells();
    }
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
        <Tab
          onClick={async () => {
            refreshSpells("Bard", data);
          }}
        >
          Bard
        </Tab>
        <Tab
          onClick={async () => {
            refreshSpells("Cleric", data);
          }}
        >
          Cleric
        </Tab>
        <Tab
          onClick={async () => {
            refreshSpells("Druid", data);
          }}
        >
          Druid
        </Tab>
        <Tab
          onClick={async () => {
            refreshSpells("Paladin", data);
          }}
        >
          Paladin
        </Tab>
        <Tab
          onClick={async () => {
            refreshSpells("Ranger", data);
          }}
        >
          Ranger
        </Tab>
        <Tab
          onClick={async () => {
            refreshSpells("Sorcerer", data);
          }}
        >
          Sorcerer
        </Tab>
        <Tab
          onClick={async () => {
            refreshSpells("Warlock", data);
          }}
        >
          Warlock
        </Tab>
        <Tab
          onClick={async () => {
            refreshSpells("Wizard", data);
          }}
        >
          Wizard
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          {!fetching && data ? (
            <SpellAccordion data={data} />
          ) : (
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          )}
        </TabPanel>
        <TabPanel>
          {!fetching && data ? (
            <SpellAccordion data={data} />
          ) : (
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          )}
        </TabPanel>
        <TabPanel>
          {!fetching && data ? (
            <SpellAccordion data={data} />
          ) : (
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          )}
        </TabPanel>
        <TabPanel>
          {!fetching && data ? (
            <SpellAccordion data={data} />
          ) : (
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          )}
        </TabPanel>
        <TabPanel>
          {!fetching && data ? (
            <SpellAccordion data={data} />
          ) : (
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          )}
        </TabPanel>
        <TabPanel>
          {!fetching && data ? (
            <SpellAccordion data={data} />
          ) : (
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          )}
        </TabPanel>
        <TabPanel>
          {!fetching && data ? (
            <SpellAccordion data={data} />
          ) : (
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          )}
        </TabPanel>
        <TabPanel>
          {!fetching && data ? (
            <SpellAccordion data={data} />
          ) : (
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SpellTabs;
