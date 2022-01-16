import { Box, Center, Heading, Link } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { withUrqlClient } from "next-urql";
import { Head } from "next/document";
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
      <Head>
        <title>Spellbook App</title>
        <meta name="description" content="5th edition Spellbook tracker">
          <meta property="og:url" content="https://spellbook.normanli.dev" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Spellbook App" />
          <meta
            property="og:description"
            content="5th edition Spellbook tracker"
          />
          <meta
            property="og:image"
            content="https://cdn.discordapp.com/attachments/855272186272808991/932343814574723152/unknown.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Spellbook App" />
          <meta
            name="twitter:description"
            content="5th edition Spellbook tracker"
          />
          <meta
            name="twitter:image"
            content="https://cdn.discordapp.com/attachments/855272186272808991/932343814574723152/unknown.png"
          />
        </meta>
      </Head>
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
