import { Button } from "@chakra-ui/react";
import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import React, { ReactElement } from "react";
import { useSpellsQuery } from "src/generated/graphql";
import { createUrqlClient } from "src/utils/createUrqlClient";

const Spellbook: NextPage = () => {
  const [{ data: spells }] = useSpellsQuery();
  const spell: ReactElement[] = [];
  spells?.spells.forEach((e) => spell.push(<p key={e.name}>{e.name}</p>));
  return <div>{spell}</div>;
};

export default withUrqlClient(createUrqlClient)(Spellbook);
