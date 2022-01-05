import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Menu from "./Menu";
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <Heading position="fixed" w={"full"} padding={".5em"} bg={"tomato"}>
      <Flex justifyContent="space-between" margin={"auto"} w={"80vw"}>
        Welcome to the proj
        <Menu></Menu>
      </Flex>
    </Heading>
  );
};

export default Navbar;
