import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { SWRConfig } from "swr"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig>
      <ChakraProvider value={defaultSystem}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  )
}