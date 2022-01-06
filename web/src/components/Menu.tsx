import {
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React, { ReactChild, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
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
    <Flex gap=".5em">
      <Link href="/browse">Browse Spells </Link> |
      <Menu>
        <MenuButton as={Link}>
          <Flex alignItems="center">
            Profile <FaChevronDown />
          </Flex>
        </MenuButton>
        <MenuList>
          {links.map((e, i) => (
            <MenuItem key={i}>{e}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default NavMenu;
