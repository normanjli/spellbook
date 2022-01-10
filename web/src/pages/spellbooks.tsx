import { Center } from "@chakra-ui/react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { withUrqlClient } from "next-urql";
import React from "react";
import Navbar from "src/components/Navbar";
import { createUrqlClient } from "src/utils/createUrqlClient";

const CreateCharacter: NextPage = () => {
  const { data, status } = useSession();
  return (
    <>
      <Navbar location={"SpellBooks"}></Navbar>
    </>
  );
};

export default withUrqlClient(createUrqlClient)(CreateCharacter);
