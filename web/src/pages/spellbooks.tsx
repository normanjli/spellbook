import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import React from "react";
import CharSpellbook from "src/components/CharSpellBook";
import Navbar from "src/components/Navbar";
import { createUrqlClient } from "src/utils/createUrqlClient";

const CreateCharacter: NextPage = () => {
  return (
    <>
      <Navbar location={"Spellbooks"}></Navbar>
      <CharSpellbook />
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(CreateCharacter);
