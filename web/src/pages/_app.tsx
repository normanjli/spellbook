import "reflect-metadata";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import CharacterContextProvider from "src/context/characterContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <ChakraProvider>
        <CharacterContextProvider>
          <Component {...pageProps} />
        </CharacterContextProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
