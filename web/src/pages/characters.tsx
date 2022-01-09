import { Center } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { withUrqlClient } from "next-urql";
import { useEffect, useState } from "react";
import { useMyCharsQuery } from "src/generated/graphql";
import { createUrqlClient } from "src/utils/createUrqlClient";
import Navbar from "../components/Navbar";
interface chars {
  name: string;
  class: string | null | undefined;
}
const Characters: NextPage = () => {
  const { data: session, status } = useSession();
  const [{ data: charList }, getChars] = useMyCharsQuery({
    variables: { email: session?.user?.email as string },
    pause: true,
  });
  const [chars, setChars] = useState<chars[]>();
  useEffect(() => {
    console.log(status);
    if (status === "authenticated") {
      console.log(session?.user?.email);
      getChars();
      console.log(charList);
      setChars(session?.charMe as chars[]);
    }
  }, [status]);
  return (
    <>
      <Navbar location="Characters"></Navbar>
      <Center flexDir={"column"} bg={"gray.100"} h={"100vh"} w={"100%"}>
        {!chars
          ? "Add some Characters!"
          : chars.map((e, i) => (
              <p key={i}>
                {e.name} the {e.class}
              </p>
            ))}
      </Center>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Characters);
