import {
  Center,
  Flex,
  RadioGroup,
  Stack,
  useRadioGroup,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { withUrqlClient } from "next-urql";
import { useEffect, useState } from "react";
import CharacterCard from "src/components/CharacterCard";
import CreateCharForm from "src/components/CreateCharForm";
import RadioCard from "src/components/RadioCard";
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
  const [dndClass, setDndClass] = useState("Other");

  useEffect(() => {
    if (status === "authenticated") {
      getChars();
    }
  }, [status, getChars]);
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
        <SideBar dndClass={dndClass}></SideBar>
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
        <Flex flexDir={"column"} gap="1em">
          {!charList?.myChars?.errors ? (
            <CharacterCard charList={charList?.myChars} />
          ) : (
            "Add some Characters"
          )}
        </Flex>
      </Center>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Characters);
