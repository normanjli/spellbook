import { Center } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { withUrqlClient } from "next-urql";
import { useEffect, useState } from "react";
import { useCharMeMutation } from "src/generated/graphql";
import { createUrqlClient } from "src/utils/createUrqlClient";
import Navbar from "../components/Navbar";
interface chars {
  name: string;
  class: string | null | undefined;
}
const Characters: NextPage = () => {
  const { data, status } = useSession();
  const [, getChars] = useCharMeMutation();
  const [chars, setChars] = useState<chars[]>();
  useEffect(() => {
    console.log(status);
    if (status === "authenticated") {
      (async () => {
        console.log(data?.user?.email);
        const charlist = await getChars({ email: "normanjli@gmail.com" });
        setChars(charlist.data?.charMe as chars[]);
      })();
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