import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/provider'
import { extendTheme } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
  const theme = extendTheme({ config })
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
