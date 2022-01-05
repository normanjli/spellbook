import type { AppProps } from "next/app";
import "reflect-metadata";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
