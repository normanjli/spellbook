import {
  Center,
  Flex,
  Heading,
  Link,
  RadioGroup,
  Spinner,
  Stack,
  useRadioGroup,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { withUrqlClient } from "next-urql";
import { useState } from "react";
import CharacterCard from "src/components/CharacterCard";
import ClassPreview from "src/components/ClassPreview";
import CreateCharForm from "src/components/CreateCharForm";
import RadioCard from "src/components/RadioCard";
import SideBar from "src/components/SideBar";
import { useMyCharsQuery } from "src/generated/graphql";
import { createUrqlClient } from "src/utils/createUrqlClient";
import Navbar from "../components/Navbar";

const Characters: NextPage = () => {
  const { data: session } = useSession();
  const [{ data: charList, fetching }] = useMyCharsQuery({
    variables: { email: session?.user?.email as string },
  });
  const [dndClass, setDndClass] = useState("Other");

  const options = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
    "Other",
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "class",
    defaultValue: "Other",
    onChange: setDndClass,
  });
  const group = getRootProps();

  return (
    <>
      <Navbar location="Characters"></Navbar>
      <Center
        flexDir={{ sm: "column", md: "row" }}
        h={"100vh"}
        maxW="full"
        flexWrap={"wrap"}
        gap={"1em"}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={{ base: "center", md: "flex-start" }}
        padding={"1em"}
        paddingTop={"4em"}
      >
        <SideBar></SideBar>
        <Flex display={{ base: "none", md: "flex" }}>
          <CreateCharForm dndClass={dndClass}>
            <RadioGroup
              onChange={setDndClass}
              value={dndClass}
              display={{ base: "none", md: "inline" }}
            >
              <Flex flexDir={"column"}>
                <Stack {...group}>
                  {options.map((value) => {
                    const radio = getRadioProps({ value });
                    return (
                      <RadioCard key={value} {...radio}>
                        {value}
                      </RadioCard>
                    );
                  })}
                </Stack>
              </Flex>
            </RadioGroup>
          </CreateCharForm>
        </Flex>
        <Center mt="15vh" display={{ base: "none", md: "flex", lg: "flex" }}>
          <ClassPreview className={dndClass as any} />
        </Center>
        <Flex flexDir={"column"} gap="1em">
          {charList?.myChars?.character ? (
            <CharacterCard charList={charList?.myChars} />
          ) : fetching ? (
            <Center h={"90vh"}>
              <Spinner size="xl" />
            </Center>
          ) : session?.user ? (
            <Center h={"90vh"}>
              <Heading size="sm">Add a Character!</Heading>
            </Center>
          ) : (
            <Center h={"90vh"}>
              <Heading size="sm">
                <Link href="/login">Login to add characters</Link>
              </Heading>
            </Center>
          )}
        </Flex>
      </Center>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Characters);
