import { Box, Center, Heading, Link } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { withUrqlClient } from "next-urql";
import { useEffect } from "react";
import { useRegisterMutation } from "src/generated/graphql";
import { createUrqlClient } from "src/utils/createUrqlClient";
import Navbar from "../components/Navbar";

const Index: NextPage = () => {
  const { data: session, status } = useSession();
  const [, register] = useRegisterMutation();
  useEffect(() => {
    if (session?.user?.email && session?.user?.name) {
      try {
        (async () => {
          await register({
            options: {
              email: session?.user?.email as string,
              name: session?.user?.name as string,
            },
          });
        })();
      } catch (err) {
        console.log(err);
      }
    }
  }, [status, register, session]);
  return (
    <>
      <Navbar location="Home"></Navbar>
      <Center flexDir={"column"} h={"100vh"} w={"100%"}>
        <Heading mt="1em" size={"md"}>
          This is a DND 5th Edition spellbook tracking app.
        </Heading>
        <Box textAlign={"center"} mt="1em">
          This app is built with Nextjs, React, TypeScript, graphql, typeorm,
          Apollo, Urql, and Chakra-UI.
          <br /> It queries an external endpoint for the{" "}
          <Link href="https://www.dnd5eapi.co/" isExternal={true}>
            DND 5th Edition API
          </Link>{" "}
          for data.
        </Box>
      </Center>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
