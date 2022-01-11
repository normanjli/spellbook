import type { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import SpellTabs from "src/components/SpellTabs";
import { createUrqlClient } from "src/utils/createUrqlClient";
import Navbar from "../components/Navbar";

const BrowseSpells: NextPage = () => {
  return (
    <>
      <Navbar location="Browsing Spells"></Navbar>
      <SpellTabs options={undefined} />
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(BrowseSpells);
