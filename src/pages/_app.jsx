import React from 'react';
import { ChakraProvider, Box, Flex } from '@chakra-ui/react';
import { theme, themeDark } from "../../styles/theme";

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
      <Component {...pageProps} />
      <h1>Teste</h1>
    </ChakraProvider>
  )
}

export default MyApp
