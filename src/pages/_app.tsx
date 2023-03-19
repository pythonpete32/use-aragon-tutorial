import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import NextHead from "next/head";
import * as React from "react";
import { WagmiConfig } from "wagmi";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import { chains, client } from "../wagmi";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import { AragonProvider } from "@daobox/use-aragon";

export const theme = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
  },
  proTheme
);

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <AragonProvider>
          <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode="dark" />
            {mounted && <Component {...pageProps} />}
          </ChakraProvider>
        </AragonProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
