import { Box, Center, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "src/utils/createUrqlClient";
import Navbar from "../components/Navbar";

const Index: NextPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <Center flexDir={"column"} bg={"gray.100"} h={"100vh"} w={"100%"}>
        <Heading mt="1em" size={"md"}>
          This is a DND 5th Edition spellbook tracking app.
        </Heading>
        <Box textAlign={"center"} mt="1em">
          This app is built with Nextjs, React, TypeScript, graphql, typeorm,
          Apollo, Urql, and Chakra-UI.
          <br /> It queries the external graphql endpoint for the DND 5th
          Edition API for data.
        </Box>
      </Center>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
