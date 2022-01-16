import { Heading, Link } from "@chakra-ui/react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRegisterMutation } from "src/generated/graphql";

const Register: NextPage = () => {
  const { data: session, status } = useSession();
  const [, register] = useRegisterMutation();
  const route = useRouter();
  useEffect(() => {
    if (session?.user?.email && session?.user?.name) {
      try {
        (async () => {
          await register({
            options: {
              email: session?.user?.email as string,
              name: session?.user?.name as string,
            },
          });
          route.replace("/");
        })();
      } catch (err) {
        console.log(err);
      }
    }
  }, [status, register, route, session]);
  return (
    <Heading>
      Registering you as a user, you will be redirected shortly. If you are not
      redirected{" "}
      <Link
        href="/"
        onClick={async () => {
          await register({
            options: {
              email: session?.user?.email as string,
              name: session?.user?.name as string,
            },
          });
        }}
      >
        click here
      </Link>
    </Heading>
  );
};

export default Register;
