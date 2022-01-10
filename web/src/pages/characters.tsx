import { Center } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { withUrqlClient } from "next-urql";
import { useEffect } from "react";
import CharacterCard from "src/components/CharacterCard";
import SideBar from "src/components/SideBar";
import { useMyCharsQuery } from "src/generated/graphql";
import { createUrqlClient } from "src/utils/createUrqlClient";
import Navbar from "../components/Navbar";

const Characters: NextPage = () => {
  const { data: session, status } = useSession();
  const [{ data: charList }, getChars] = useMyCharsQuery({
    variables: { email: session?.user?.email as string },
    pause: true,
  });
  useEffect(() => {
    if (status === "authenticated") {
      getChars();
    }
  }, [status]);
  return (
    <>
      <Navbar location="Characters"></Navbar>
      <SideBar></SideBar>
      <Center
        paddingTop={"8em"}
        flexDir={"column"}
        bg={"gray.100"}
        h={"100vh"}
        maxW="full"
        flexWrap={"wrap"}
        gap={"1em"}
      >
        {!charList?.myChars?.errors ? (
          <CharacterCard charList={charList?.myChars} />
        ) : (
          "Add some Characters"
        )}
      </Center>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Characters);
