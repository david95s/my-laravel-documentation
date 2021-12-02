import React from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { theme, themeDark } from "../../styles/theme";
import Header from '../components/Header';
import { Sidebar } from '../components/SideBar';

import '../../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [theDarkTheme, setTheDarkTheme] = React.useState(true);
  const [ isopenSidebar, setIsOpenSidebar ] = React.useState(true);


  function toogleThemeToDark(){
    setTheDarkTheme(!theDarkTheme);
  }
  

  function toogleSideBar(){
    setIsOpenSidebar(!isopenSidebar);
  }
  

  return (
    <ChakraProvider theme={ theDarkTheme ? themeDark : theme}>
      <Flex overflowY="hidden">
        <Box>
          <Sidebar isopenSidebar={isopenSidebar} toogleSideBar={toogleSideBar} />
        </Box>
        <Box style={{flex: 1}}>
          
          <Header theDarkTheme={theDarkTheme} toogleThemeToDark={toogleThemeToDark} isopenSidebar={isopenSidebar} toogleSideBar={toogleSideBar}/>
          <Component {...pageProps} />

        </Box>
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
