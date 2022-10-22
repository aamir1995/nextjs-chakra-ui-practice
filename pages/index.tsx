import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '@components/Header'
import { Pricing } from '@components/Pricing'
import { Features } from '@components/Features'

const Home: NextPage = () => {
  return (
    <Box textAlign="center">
      <Head>
        <title>Pricing UI</title>
      </Head>
      <Header />
      <Pricing />
      <Features />
    </Box>
  )
}

export default Home
