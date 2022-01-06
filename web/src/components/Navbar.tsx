import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";
interface NavbarProps {
  location: String;
}

const Navbar: React.FC<NavbarProps> = ({ location }) => {
  return (
    <Heading position="fixed" w={"full"} padding={".5em"} bg={"tomato"}>
      <Flex justifyContent="space-between" margin={"auto"} w={"80vw"}>
        <Link href="/">Spellbook</Link>
        <Heading>{location}</Heading>
        <Menu></Menu>
      </Flex>
    </Heading>
  );
};

export default Navbar;
