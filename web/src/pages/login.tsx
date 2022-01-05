import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect } from "react";
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa";
import { useRegisterMutation } from "src/generated/graphql";
import { createUrqlClient } from "src/utils/createUrqlClient";
import { Card } from "../components/Card";
const Login = () => {
  const { data: session, status } = useSession();
  const [, register] = useRegisterMutation();
  const route = useRouter();
  useEffect(() => {
    if (status === "authenticated") {
      const options = {
        email: session?.user?.email as string,
        name: session?.user?.name as string,
      };
      try {
        (async () => await register({ options }))();
        route.push("/");
      } catch (err) {
        console.log(err);
      }
    }
  }, [status]);
  const userRegister = async (
    e: React.MouseEvent,
    id: "github" | "google" | "discord"
  ) => {
    e.preventDefault();
    let res = await signIn(id);
    // console.log(res);
  };
  return (
    <Box
      bg={useColorModeValue("gray.50", "inherit")}
      minH="100vh"
      py="12"
      px={{ base: "4", lg: "8" }}
    >
      <Box maxW="md" mx="auto">
        <Heading textAlign="center" size="xl" fontWeight="extrabold" mb={"1em"}>
          Sign in to your account with OAuth
        </Heading>
        <Card>
          <Flex direction={"column"} gap={".25em"}>
            <Button
              bg={"#5865F2"}
              color="white"
              variant="outline"
              onClick={(e) => userRegister(e, "discord")}
            >
              <FaDiscord />
              <Text m={"1em"}>Login with Discord</Text>
            </Button>
            <Button
              bg={"tomato"}
              color="currentColor"
              variant="outline"
              onClick={(e) => userRegister(e, "google")}
            >
              <FaGoogle />
              <Text m={"1em"}>Login with Google</Text>
            </Button>
            <Button
              bg={"black"}
              color="White"
              variant="outline"
              onClick={(e) => userRegister(e, "github")}
            >
              <FaGithub />
              <Text m={"1em"}>Login with Github</Text>
            </Button>
          </Flex>
        </Card>
      </Box>
    </Box>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: false })(Login);
