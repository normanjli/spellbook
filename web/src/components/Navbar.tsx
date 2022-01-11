import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaStroopwafel } from "react-icons/fa";
import Menu from "./Menu";
interface NavbarProps {
  location: String;
}

const Navbar: React.FC<NavbarProps> = ({ location }) => {
  return (
    <Heading
      zIndex={1}
      position="fixed"
      w={"full"}
      padding={".5em"}
      bg={"tomato"}
    >
      <Flex justifyContent="space-between" margin={"auto"} w={"80vw"}>
        <Flex>
          <Link href="/">Spellbook</Link>
        </Flex>
        {location !== "Browsing Spells" ? (
          <Heading display={{ base: "none", md: "flex" }}>{location}</Heading>
        ) : (
          ""
        )}
        <Menu></Menu>
      </Flex>
    </Heading>
  );
};

export default Navbar;
