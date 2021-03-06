import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import React from "react";
import CharSpellbook from "../components/CharSpellbook";
import Navbar from "src/components/Navbar";
import { createUrqlClient } from "src/utils/createUrqlClient";

const CharacterSpellbook: NextPage = () => {
  return (
    <>
      <Navbar location={"Spellbooks"}></Navbar>
      <CharSpellbook />
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(
  CharacterSpellbook
);

//todo
//fix form controller for adding spells
