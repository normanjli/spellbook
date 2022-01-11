import {
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React, { ReactChild, useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaHamburger } from "react-icons/fa";
const NavMenu: React.FC = () => {
  const { status } = useSession();
  const [links, setLinks] = useState<ReactChild[]>([]);
  useEffect(() => {
    if (status === "loading" || status === "unauthenticated") {
      setLinks([
        <Link key="login" href={"/login"}>
          Login
        </Link>,
      ]);
    } else if (status === "authenticated") {
      setLinks([
        <Link key="characters" href="/characters">
          Characters
        </Link>,
        <Link key="spellbooks" href={"/spellbooks"}>
          Spellbooks
        </Link>,
      ]);
    }
  }, [status]);

  return (
    <>
      <Flex
        gap=".5em"
        display={{ base: "none", lg: "flex" }}
        alignItems="baseline"
      >
        <Link href="/browse">Browse Spells </Link> |
        <Menu>
          <MenuButton as={Link}>
            <Flex alignItems="center">
              <Heading>Profile</Heading> <FaChevronDown />
            </Flex>
          </MenuButton>
          <MenuList>
            {links.map((e, i) => (
              <MenuItem key={i}>{e}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
      <Flex display={{ base: "flex", lg: "none" }}>
        <Menu>
          <MenuButton as={Link}>
            <Flex alignItems="baseline">
              <Heading display={{ base: "none", lg: "flex" }}>Profile</Heading>{" "}
              <FaBars />
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link href="/browse">Browse Spells</Link>
            </MenuItem>
            {links.map((e, i) => (
              <MenuItem key={i}>{e}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default NavMenu;
