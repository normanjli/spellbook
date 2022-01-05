import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import React, { ReactChild, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const NavMenu: React.FC = () => {
  const { status } = useSession();
  const [links, setLinks] = useState<ReactChild[]>([]);
  useEffect(() => {
    if (status === "loading" || status === "unauthenticated") {
      setLinks([
        <Link key="home" href={"/"}>
          Home
        </Link>,
        <Link key="login" href={"/login"}>
          Login
        </Link>,
      ]);
    } else if (status === "authenticated") {
      setLinks([
        <Link key="home" href={"/"}>
          Home
        </Link>,
        <Link key="spellbooks" href={"/spellbooks"}>
          Spellbooks
        </Link>,
      ]);
    }
  }, [status]);

  return (
    <Menu>
      <MenuButton as={Button} icon={<FaBars />}>
        <FaBars />
      </MenuButton>
      <MenuList>
        {links.map((e) => (
          <MenuItem>{e}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
