import Head from 'next/head';
import { 
  Box,
  Heading,
  Text,
} from '@chakra-ui/react'

// import {ContentMyRoutes } from '../components/ContentMyRoutes';

export default function Controllersroute(){
  
  return(
    <>
      <Head>
        <title>Laravel | routes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box  
        h="calc(100vh - 70px)"
        overflowY="scroll"
        className="theScroll"
      >
        <Box
          width="90%"
          maxW="1200px"
          margin={["80px auto", "80px auto","80px auto", "80px auto", "80px auto", "80px auto"]}
        >
          <Heading fontWeight="100" color="gray.400" mb="20px">
            <Text as="span" color="laravelColor" fontSize="1.5rem" >#</Text>
            <Text as="span" ml="8px">Rotas usando Controllers</Text>
          </Heading>
        </Box>
      </Box>
    </>
  )
}