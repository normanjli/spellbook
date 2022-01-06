import {
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { useEffect } from "react";
import { createUrqlClient } from "src/utils/createUrqlClient";
import Navbar from "../components/Navbar";

const BrowseSpells: NextPage = () => {
  useEffect(() => {});
  return (
    <>
      <Navbar location="Browsing Spells"></Navbar>
      <Center></Center>
      <Tabs
        orientation="vertical"
        size="lg"
        align="center"
        position={"absolute"}
        Left="0"
        top="5em"
        variant={"unstyled"}
        isFitted={true}
      >
        <TabList>
          <Tab>Bard</Tab>
          <Tab>Cleric</Tab>
          <Tab>Druid</Tab>
          <Tab>Paladin</Tab>
          <Tab>Ranger</Tab>
          <Tab>Sorcerer</Tab>
          <Tab>Wizard</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
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
